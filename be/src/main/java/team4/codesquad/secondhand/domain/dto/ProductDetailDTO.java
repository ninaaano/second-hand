package team4.codesquad.secondhand.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.Category;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.ProductImage;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@RequiredArgsConstructor
public class ProductDetailDTO {
    private final Integer productId;
    private final String sellerId;
    private String title;
    private String contents;
    private int price;
    private final LocalDateTime createdAt;
    private String status;
    private int watchlistCounts;
    private int chatroomCounts;
    private List<ProductImage> images;
    private String category;
    private Integer views;

    public ProductDetailDTO(Product product){
        this.productId = product.getProductId();
        this.sellerId = product.getUser().getUsername();
        this.title = product.getTitle();
        this.contents = product.getContents();
        this.price = product.getPrice();
        this.createdAt = product.getCreatedAt();
        this.status = product.getStatus().name();
        this.watchlistCounts = product.calculateWatchlistCount();
        this.chatroomCounts = product.calculateChatroomCount();
        this.images = product.getProductImages();
        this.category = product.getCategory().getName();
        this.views = product.getViews();
    }



}
