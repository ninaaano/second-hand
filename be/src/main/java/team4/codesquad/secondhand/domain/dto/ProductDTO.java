package team4.codesquad.secondhand.domain.dto;

import lombok.Getter;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.ProductImage;

import java.time.LocalDateTime;

@Getter
public class ProductDTO {

    private Integer productId;
    private String title;
    private int price;
    private LocalDateTime createdAt;
    private Status status;
    private Location location;
    private int watchlistCounts;
    private int chatroomCounts;
    private ProductImage mainImage;

    public ProductDTO(Product product) {
        this.productId = product.getProductId();
        this.title = product.getTitle();
        this.price = product.getPrice();
        this.createdAt = product.getCreatedAt();
        this.status = product.getStatus();
        this.location = product.getLocation();
        this.watchlistCounts = product.calculateWatchlistCount();
        this.chatroomCounts = product.calculateChatroomCount();
        this.mainImage = product.findMainProductImage();
    }
}
