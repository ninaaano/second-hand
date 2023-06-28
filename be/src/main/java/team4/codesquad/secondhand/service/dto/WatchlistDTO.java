package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import team4.codesquad.secondhand.domain.Watchlist;

@Getter
public class WatchlistDTO {

    private final Integer watchlistId;
    private final Integer productId;
    private final Integer userId;

    public WatchlistDTO(Watchlist watchlist) {
        this.watchlistId = watchlist.getWatchlistId();
        this.productId = watchlist.getProduct().getProductId();
        this.userId = watchlist.getUser().getUserId();
    }
}
