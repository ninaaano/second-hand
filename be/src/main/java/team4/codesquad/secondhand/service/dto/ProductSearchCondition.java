package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ProductSearchCondition {

    private Integer locationId;
    private Integer categoryId;
    private String saleStatus;
}
