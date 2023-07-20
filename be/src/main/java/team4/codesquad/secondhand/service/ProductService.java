package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.*;
import team4.codesquad.secondhand.repository.*;
import team4.codesquad.secondhand.service.dto.*;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final LocationRepository locationRepository;
    private final UserRepository userRepository;
    private final S3UploaderService s3UploaderService;
    private final WatchlistRepository watchlistRepository;
    private final ProductImageRepository productImageRepository;

    public ProductListDTO buildProductListDTO(User user, Pageable pageable, ProductSearchCondition productSearchCondition) {
        Slice<Product> productsWithSlice = productRepository.findFilteredProducts(pageable, productSearchCondition);
        List<Product> products = productsWithSlice.getContent();

        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다"));

        Queue<WatchlistDTO> watchlistDTOs = watchlistRepository.findByUserAndProductInOrderByProduct(savedUser, products)
                .stream()
                .map(WatchlistDTO::new)
                .collect(Collectors.toCollection(LinkedList::new));

        return new ProductListDTO(products.stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList()), productsWithSlice.hasNext(), watchlistDTOs);
    }

    @Transactional
    public ProductDetailDTO increaseViewsAndRetrieveProduct(User user, Integer productId) {
        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다"));

        Product product = productRepository.findBy(productId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));
        productRepository.countViews(productId);

        ProductDetailDTO productDetailDTO = new ProductDetailDTO(product);

        if (watchlistRepository.existsByUserAndProduct(savedUser, product)) {
            productDetailDTO.setWatchlist();
        }

        return productDetailDTO;
    }

    @Transactional
    public ProductResponseIdDTO createProduct(ProductRequestDTO request, @Login User user) {
        User seller = findUserByUserId(user);
        Category category = findCategoryByCategoryId(request.getCategoryId());
        Location location = findLocationByLocationId(request.getLocationId());

        Product product = createProductEntity(request, seller, category, location);
        addProductImages(product, request.getProductImages());

        Product savedProduct = productRepository.save(product);
        return new ProductResponseIdDTO(savedProduct);
    }

    private User findUserByUserId(User user) {
        return userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));
    }

    private Category findCategoryByCategoryId(Integer categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));
    }

    private Location findLocationByLocationId(Integer locationId) {
        return locationRepository.findById(locationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역입니다."));
    }

    private Product findProductByProductId(Integer productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품입니다."));
    }

    private Product createProductEntity(ProductRequestDTO request, User seller, Category category, Location location) {
        return Product.builder()
                .title(request.getTitle())
                .price(request.getPrice())
                .user(seller)
                .contents(request.getContents())
                .category(category)
                .location(location)
                .build();
    }

    private void addProductImages(Product product, List<MultipartFile> productImages) {
        List<String> productImagesUrls = s3UploadAndConverter(productImages);

        for (String imageUrl : productImagesUrls) {
            ProductImage productImage = new ProductImage(imageUrl);
            product.addProductImage(productImage);
        }
    }

    public List<String> s3UploadAndConverter(List<MultipartFile> multipartFiles) {
        List<String> images = new ArrayList<>();
        for (MultipartFile file : multipartFiles) {
            images.add(s3UploaderService.upload(file));
        }
        return images;
    }

    @Transactional
    public void deleteProduct(Integer productId) {
        Product product = findProductByProductId(productId);
        product.setDeleted(true);
        productRepository.save(product);
    }

    public ProductListDTO getUserSalesProducts(User user, Pageable pageable, ProductSearchCondition productSearchCondition) {
        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다"));
        productSearchCondition.setUserId(savedUser.getUserId());

        Slice<Product> productsWithSlice = productRepository.findFilteredProducts(pageable, productSearchCondition);
        List<Product> products = productsWithSlice.getContent();

        return new ProductListDTO(products.stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList()), productsWithSlice.hasNext());
    }

    @Transactional
    public ProductResponseIdDTO updateProductStatus(Integer productId, Status request) {
        Product product = findProductByProductId(productId);
        product.setStatus(request);
        productRepository.updateStatus(productId, request);
        return new ProductResponseIdDTO(product);
    }

    @Transactional
    public ProductResponseIdDTO updateProduct(Integer productId, ProductUpdateRequestDTO request) {

        Product product = findProductByProductId(productId);
        Category category = findCategoryByCategoryId(request.getCategoryId());
        Location location = findLocationByLocationId(request.getLocationId());
        product.updateProduct(request.getTitle(), request.getContents(), request.getPrice(), location, category);

        // 기존 이미지와 넘어온 이미지 비교
        List<String> updateOriginalImages = request.getOriginalImages();
        List<String> productImages = getExistingImageUrls(product.getProductImages());

        // 원래 있던 이미지에서 빠진 이미지를 찾아냄
        List<String> removeImages = pickUpRemoveProductImages(productImages, updateOriginalImages);

        // 레파지토리에서 이미지 삭제, S3에서 빠진 이미지 파일 삭제
        for (String deletedImage : removeImages) {
            productImageRepository.deleteByProductIdAndImageUrl(productId, deletedImage);
            s3UploaderService.delete(deletedImage);
        }

        // 새로운 이미지 파일 추가
        addProductImages(product, request.getNewProductImages());

        return new ProductResponseIdDTO(product);
    }

    private List<String> pickUpRemoveProductImages(List<String> originImage, List<String> updateImage) {
        return originImage.stream()
                .filter(image -> !updateImage.contains(image))
                .collect(Collectors.toList());
    }

    private List<String> getExistingImageUrls(List<ProductImage> existingImages) {
        return existingImages.stream()
                .map(ProductImage::getImageUrl)
                .collect(Collectors.toList());
    }
}

