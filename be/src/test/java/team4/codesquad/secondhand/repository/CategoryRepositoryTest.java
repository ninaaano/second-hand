package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team4.codesquad.secondhand.domain.Category;

import java.util.List;

@SpringBootTest
class CategoryRepositoryTest {

    @Autowired
    private CategoryRepository categoryRepository;

    @Test
    void test() {
        List<Category> categories = categoryRepository.findAll();
        System.out.println(categories.get(0));
    }
}