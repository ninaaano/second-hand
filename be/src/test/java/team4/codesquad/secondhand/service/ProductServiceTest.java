package team4.codesquad.secondhand.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team4.codesquad.secondhand.domain.dto.ProductDetailDTO;
import team4.codesquad.secondhand.repository.ProductRepository;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Test
    @DisplayName("게시글 1건 조회")
    void findById() {
        int prodId = 1;
        ProductDetailDTO product = productService.findById(prodId);
        Assertions.assertNotNull(product);
    }

}
