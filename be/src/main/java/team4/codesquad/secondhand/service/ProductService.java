package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.domain.*;
import team4.codesquad.secondhand.repository.*;
import team4.codesquad.secondhand.service.dto.ProductDTO;
import team4.codesquad.secondhand.service.dto.ProductDetailDTO;
import team4.codesquad.secondhand.service.dto.ProductListDTO;
import team4.codesquad.secondhand.service.dto.ProductRequestDTO;

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

    public ProductListDTO buildProductListDTO(Pageable pageable) {
        Slice<Product> productsWithSlice = productRepository.findFilteredProducts(pageable);
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
    public ProductDetailDTO createProduct(ProductRequestDTO request, @Login User user) {
        // 상품 생성을 위해 필요한 정보 추출
        String title = request.getTitle();
        Integer price = request.getPrice();
        String contents = request.getContents();
        List<String> productImages = request.getProductImages();
        int categoryId = request.getCategoryId();
        Location locationId = user.getPrimaryLocation();

        User seller = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다"));

        // 상품 엔티티 생성을 위해 필요한 정보 설정
        Category categoryEntity = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));

        Product product = Product.builder()
                .title(title)
                .price(price)
                .user(seller)
                .contents(contents)
                .category(categoryEntity)
                .location(locationId)
                .build();

        Product savedProduct = productRepository.save(product);

        // 상품 이미지 엔티티 생성 및 연관관계 설정
        for (String image : productImages) {
            ProductImage productImage = ProductImage.builder()
                    .imageUrl(image)
                    .product(savedProduct)
                    .build();
            productImageRepository.save(productImage);
        }

        return increaseViewsAndRetrieveProduct(savedProduct.getProductId());
    }
}

