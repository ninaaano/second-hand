package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.Product;

import java.time.LocalDateTime;

@Getter
public class ProductDTO {

    private final Integer productId;
    private final String title;
    private final int price;
    private final LocalDateTime createdAt;
    private final Status status;
    private final Location location;
    private final int watchlistCounts;
    private final int chatroomCounts;
    private final ProductImageDTO mainImage;

    public ProductDTO(Product product) {
        this.productId = product.getProductId();
        this.title = product.getTitle();
        this.price = product.getPrice();
        this.createdAt = product.getCreatedAt();
        this.status = product.getStatus();
        this.location = product.getLocation();
        this.watchlistCounts = product.calculateWatchlistCount();
        this.chatroomCounts = product.calculateChatroomCount();
        this.mainImage = new ProductImageDTO(product.findMainProductImage());
    }
}
