package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.ProductImage;

import java.util.List;

@SpringBootTest
@Transactional
class ProductImageRepositoryTest {

    @Autowired
    private ProductImageRepository productImageRepository;

    @Test
    void init() {
        List<ProductImage> images = productImageRepository.findAll();
        System.out.println(images.get(0));

    }


}