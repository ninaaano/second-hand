package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.repository.ProductRepository;
import team4.codesquad.secondhand.service.dto.ProductDTO;
import team4.codesquad.secondhand.service.dto.ProductDetailDTO;
import team4.codesquad.secondhand.service.dto.ProductListDTO;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;

    public ProductListDTO buildProductListDTO(Pageable pageable) {
        List<Product> products = productRepository.findAll(pageable).getContent();
        return new ProductListDTO(products.stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList()));
    }

    @Transactional
    public ProductDetailDTO increaseViewsAndRetrieveProduct(Integer productId) {
        Product product = productRepository.findBy(productId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));
        productRepository.countViews(productId);
        return new ProductDetailDTO(product);
    }

}

