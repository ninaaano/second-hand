package team4.codesquad.secondhand.domain.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class ProductRequestDTO {
    @NotBlank(message = "제목을 입력해주세요")
    private String title;
    private Integer price;
    @NotBlank(message = "내용을 입력해주세요")
    private String contents;
    @NotBlank(message = "사진은 1장 이상 등록되어야 합니다")
    private List<String> productImages;
    private String category;
    private String location;

    @Builder
    public ProductRequestDTO(String title, Integer price, String contents, List<String> productImages, String category, String location) {
        this.title = title;
        this.price = price;
        this.contents = contents;
        this.productImages = productImages;
        this.category = category;
        this.location = location;
    }
}
