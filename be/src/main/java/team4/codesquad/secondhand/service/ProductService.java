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
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.repository.ProductRepository;
import team4.codesquad.secondhand.service.dto.ProductDTO;
import team4.codesquad.secondhand.service.dto.ProductDetailDTO;
import team4.codesquad.secondhand.service.dto.ProductListDTO;
import team4.codesquad.secondhand.service.dto.ProductSearchCondition;

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
    public ProductCreateResponseDTO createProduct(ProductRequestDTO request, @Login User user) {
        // 상품 생성을 위해 필요한 정보 추출
        String title = request.getTitle();
        Integer price = request.getPrice();
        String contents = request.getContents();
        List<MultipartFile> productImages = request.getProductImages();
        List<String> productImagesUrls = getPhotosUrl(productImages);
        int categoryId = request.getCategoryId();
        int locationId = request.getLocationId();

        User seller = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다"));

        // 상품 엔티티 생성을 위해 필요한 정보 설정
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));

        Location location = locationRepository.findById(locationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역입니다."));

        Product product = Product.builder()
                .title(title)
                .price(price)
                .user(seller)
                .contents(contents)
                .category(category)
                .location(location)
                .build();

        // 상품 이미지 엔티티 생성 및 연관관계 설정
        productImagesUrls.stream()
                .map(img -> new ProductImage(img))
                .forEach(pi -> product.addProductImage(pi));

        return new ProductCreateResponseDTO(productRepository.save(product));
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
}

