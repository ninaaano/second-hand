package team4.codesquad.secondhand.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import team4.codesquad.secondhand.domain.Category;
import team4.codesquad.secondhand.repository.CategoryRepository;
import team4.codesquad.secondhand.service.dto.CategoryDTO;
import team4.codesquad.secondhand.service.dto.CategoryListDTO;

import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {

    @InjectMocks
    private CategoryService categoryService;

    @Mock
    private CategoryRepository categoryRepository;

    @Test
    @DisplayName("모든 카테고리 정보를 가져온다.")
    void findAll() {
        // given
        List<Category> mockCategory = List.of(new Category(1, "카테고리1"), new Category(2, "카테고리2"));
        BDDMockito.given(categoryRepository.findAll()).willReturn(mockCategory);

        List<CategoryDTO> mockCategoryDTOList = mockCategory.stream()
                .map(CategoryDTO::new)
                .collect(Collectors.toList());

        // when
        CategoryListDTO categoryListDTO = categoryService.findAll();

        // then
        assertThat(categoryListDTO.getCategory().size()).isEqualTo(mockCategory.size());
        assertThat(categoryListDTO.getCategory()).usingRecursiveComparison().isEqualTo(mockCategoryDTOList);
    }
}