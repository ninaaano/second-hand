package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team4.codesquad.secondhand.domain.Product;

@Getter
@NoArgsConstructor
public class ProductResponseIdDTO {

    private Integer productId;

    public ProductResponseIdDTO(Product product) {
        this.productId = product.getProductId();
    }
}
