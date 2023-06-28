package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@AllArgsConstructor
public class ProductRequestDTO {
    @NotBlank(message = "제목을 입력해주세요")
    private String title;
    private Integer price;
    @NotBlank(message = "내용을 입력해주세요")
    private String contents;
    @Size(min=1, max=10, message = "사진은 10장 이내로 등록 가능합니다.")
    private List<MultipartFile> productImages;
    private int categoryId;
    private int locationId;

}
