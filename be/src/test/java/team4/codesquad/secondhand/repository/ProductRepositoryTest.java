package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.ProductImage;

import java.util.List;

@SpringBootTest
@Transactional
class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    void test() {
        List<Product> products = productRepository.findAll();
        System.out.println(products);
    }
}
