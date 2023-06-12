package team4.codesquad.secondhand.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CategoryListDTO {
    List<CategoryDTO> category;

}
