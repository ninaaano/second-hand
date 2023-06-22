package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import team4.codesquad.secondhand.domain.ProductImage;

@Getter
public class ProductImageDTO {
    private final Integer productImageId;

    private final String imageUrl;

    public ProductImageDTO(ProductImage productImage) {
        this.productImageId = productImage.getProductImageId();
        this.imageUrl = productImage.getImageUrl();
    }
}
