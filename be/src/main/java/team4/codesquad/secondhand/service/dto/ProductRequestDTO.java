package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@AllArgsConstructor
public class ProductRequestDTO {
    private String title;
    private Integer price;
    private String contents;
    private List<String> productImages;
    private int categoryId;
    private int locationId;

}
