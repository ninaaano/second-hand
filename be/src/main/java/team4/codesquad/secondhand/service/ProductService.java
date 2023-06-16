package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.dto.ProductDTO;
import team4.codesquad.secondhand.domain.dto.ProductDetailDTO;
import team4.codesquad.secondhand.domain.dto.ProductListDTO;
import team4.codesquad.secondhand.repository.ProductRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public ProductListDTO buildProductListDTO(Pageable pageable) {
        List<Product> products = productRepository.findAll(pageable).getContent();
        return new ProductListDTO(products.stream()
                                    .map(ProductDTO::new)
                                    .collect(Collectors.toList()));
    }

    public ProductDetailDTO findById(Integer productId) {
        Product product = productRepository.findByIdWithRelatedFields(productId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));
        productRepository.updateViews(productId);
        return new ProductDetailDTO(product);
    }

}
