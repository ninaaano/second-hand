package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.domain.*;
import team4.codesquad.secondhand.repository.*;
import team4.codesquad.secondhand.service.dto.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final LocationRepository locationRepository;
    private final ProductImageRepository productImageRepository;
    private final UserRepository userRepository;
    private final S3UploaderService s3UploaderService;

    public ProductListDTO buildProductListDTO(Pageable pageable, ProductSearchCondition productSearchCondition) {
        Slice<Product> productsWithSlice = productRepository.findFilteredProducts(pageable, productSearchCondition);
        List<Product> products = productsWithSlice.getContent();

        return new ProductListDTO(products.stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList()), productsWithSlice.hasNext());
    }

    @Transactional
    public ProductDetailDTO increaseViewsAndRetrieveProduct(Integer productId) {
        Product product = productRepository.findBy(productId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));
        productRepository.countViews(productId);
        return new ProductDetailDTO(product);
    }

    @Transactional
    public ProductResponseIdDTO createProduct(ProductRequestDTO request, @Login User user) {
        User seller = getSeller(user);
        Category category = getCategory(request.getCategoryId());
        Location location = getLocation(request.getLocationId());

        Product product = createProductEntity(request, seller, category, location);
        addProductImages(product, request.getProductImages());

        Product savedProduct = productRepository.save(product);
        return new ProductResponseIdDTO(savedProduct);
    }

    private User getSeller(User user) {
        return userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));
    }

    private Category getCategory(Integer categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));
    }

    private Location getLocation(Integer locationId) {
        return locationRepository.findById(locationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역입니다."));
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
        List<String> productImagesUrls = getPhotosUrl(productImages);

        productImagesUrls.stream()
                .map(ProductImage::new)
                .forEach(product::addProductImage);
    }

    public List<String> getPhotosUrl(List<MultipartFile> multipartFiles) {
        List<String> images = new ArrayList<>();
        for (MultipartFile file : multipartFiles) {
            images.add(s3UploaderService.upload(file));
        }

        return images;
    }

    @Transactional
    public void deleteProduct(Integer productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("상품을 찾을 수 없습니다."));
        product.setDeleted(true);
        productRepository.save(product);
    }

    @Transactional
    public ProductResponseIdDTO updateProduct(User seller, Integer productId, ProductRequestDTO request) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("상품을 찾을 수 없습니다."));

        Category category = getCategory(request.getCategoryId());
        Location location = getLocation(request.getLocationId());

        updateProductImages(product, request.getProductImages());
        product.updateProduct(request.getTitle(), request.getContents(), request.getPrice(), location, category);

        return new ProductResponseIdDTO(product);
    }

    public void updateProductImages(Product product, List<MultipartFile> productImages) {
        if (productImages == null || productImages.isEmpty()) {
            return;
        }

        List<String> newImageUrls = getPhotosUrl(productImages);
        List<ProductImage> existingImages = product.getProductImages();

        List<String> existingImageUrls = getExistingImageUrls(existingImages);

        List<ProductImage> imagesToDelete = findImagesToDelete(existingImages, newImageUrls);

        deleteImages(product, imagesToDelete);

        addNewImages(product, newImageUrls, existingImageUrls);
    }

    private List<String> getExistingImageUrls(List<ProductImage> existingImages) {
        return existingImages.stream()
                .map(ProductImage::getImageUrl)
                .collect(Collectors.toList());
    }

    private List<ProductImage> findImagesToDelete(List<ProductImage> existingImages, List<String> newImageUrls) {
        return existingImages.stream()
                .filter(image -> !newImageUrls.contains(image.getImageUrl()))
                .collect(Collectors.toList());
    }

    private void deleteImages(Product product, List<ProductImage> imagesToDelete) {
        for (ProductImage image : imagesToDelete) {
            product.removeProductImage(image);
            s3UploaderService.delete(image.getImageUrl());
            productImageRepository.delete(image);
        }
    }

    private void addNewImages(Product product, List<String> newImageUrls, List<String> existingImageUrls) {
        for (String newImageUrl : newImageUrls) {
            if (!existingImageUrls.contains(newImageUrl)) {
                ProductImage newImage = new ProductImage(newImageUrl);
                product.addProductImage(newImage);
            }
        }
    }

    public ProductListDTO getUserSalesProducts(User user, Pageable pageable, ProductSearchCondition productSearchCondition) {
        productSearchCondition.setUserId(user.getUserId());

        Slice<Product> productsWithSlice = productRepository.findFilteredProducts(pageable, productSearchCondition);
        List<Product> products = productsWithSlice.getContent();

        return new ProductListDTO(products.stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList()), productsWithSlice.hasNext());
    }

}

