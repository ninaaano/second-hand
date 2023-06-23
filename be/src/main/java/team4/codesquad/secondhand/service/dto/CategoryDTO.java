package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import team4.codesquad.secondhand.domain.Category;

@Getter
public class CategoryDTO {

    private final int categoryId;
    private final String categoryName;

    public CategoryDTO (Category category) {
        this.categoryId = category.getCategoryId();
        this.categoryName = category.getName();
    }

}
