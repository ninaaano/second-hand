package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team4.codesquad.secondhand.domain.Product;

@Getter
@NoArgsConstructor
public class ProductCreateResponseDTO {

    private Integer productId;

    public ProductCreateResponseDTO(Product product) {
        this.productId = product.getProductId();
    }
}
