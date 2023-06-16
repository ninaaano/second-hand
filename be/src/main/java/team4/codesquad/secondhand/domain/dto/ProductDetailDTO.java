package team4.codesquad.secondhand.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.ProductImage;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@RequiredArgsConstructor
public class ProductDetailDTO {
    private final Integer productId;
    private final String sellerId;
    private final String title;
    private final String contents;
    private final int price;
    private final LocalDateTime createdAt;
    private final String status;
    private final int watchlistCounts;
    private final int chatroomCounts;
    private final List<ProductImage> images;
    private final String category;
    private Integer views;

    public ProductDetailDTO(Product product){
        this.productId = product.getProductId();
        this.sellerId = product.getSellerId();
        this.title = product.getTitle();
        this.contents = product.getContents();
        this.price = product.getPrice();
        this.createdAt = product.getCreatedAt();
        this.status = product.getDetailedStatus();
        this.watchlistCounts = product.calculateWatchlistCount();
        this.chatroomCounts = product.calculateChatroomCount();
        this.images = product.getProductImages();
        this.category = product.getDetailedCategory();
        this.views = product.getViews();
    }



}
