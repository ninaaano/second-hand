package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Category;
import team4.codesquad.secondhand.domain.dto.CategoryDTO;
import team4.codesquad.secondhand.domain.dto.CategoryListDTO;
import team4.codesquad.secondhand.repository.CategoryRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;


    // 카테고리 목록
    public CategoryListDTO findAll(){
        List<Category> category = categoryRepository.findAll();
        return new CategoryListDTO(category.stream()
                .map(CategoryDTO::new)
                .collect(Collectors.toList()));
    }

}
