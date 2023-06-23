package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.ProductImage;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
    private final List<ProductImageDTO> images;
    private final String category;
    private final Integer views;
    private final int location;

    public ProductDetailDTO(Product product) {
        this.productId = product.getProductId();
        this.sellerId = product.getSellerId();
        this.title = product.getTitle();
        this.contents = product.getContents();
        this.price = product.getPrice();
        this.createdAt = product.getCreatedAt();
        this.status = product.getDetailedStatus();
        this.watchlistCounts = product.calculateWatchlistCount();
        this.chatroomCounts = product.calculateChatroomCount();
        this.images = product.getProductImages().stream()
                .map(ProductImageDTO::new)
                .collect(Collectors.toList());
        this.category = product.getDetailedCategory();
        this.views = product.getViews();
        this.location = product.getDetailedLocationId();
    }

}
