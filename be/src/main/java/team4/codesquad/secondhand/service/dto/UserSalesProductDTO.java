package team4.codesquad.secondhand.service.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.Product;

import java.time.LocalDateTime;

@Getter
@RequiredArgsConstructor
@Builder
public class UserSalesProductDTO {
    private final Integer productId;
    private final String title;
    private final int price;
    private final LocalDateTime createdAt;
    private final String imageUrl;
    private final Location location;
    private final String status;
    private final int watchlistCounts;
    private final int chatroomCounts;

    public static UserSalesProductDTO from(Product product) {
        return UserSalesProductDTO.builder()
                .productId(product.getProductId())
                .title(product.getTitle())
                .price(product.getPrice())
                .createdAt(product.getCreatedAt())
                .imageUrl(product.findMainProductImage().getImageUrl())
                .location(product.getLocation())
                .status(product.getDetailedStatus())
                .watchlistCounts(product.calculateWatchlistCount())
                .chatroomCounts(product.calculateChatroomCount())
                .build();
    }
}
