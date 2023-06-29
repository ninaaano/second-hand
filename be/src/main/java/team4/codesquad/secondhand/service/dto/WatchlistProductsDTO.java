package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import team4.codesquad.secondhand.domain.Watchlist;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class WatchlistProductsDTO {

    private final List<ProductDTO> products;
    private final Boolean hasNext;

    public WatchlistProductsDTO(List<Watchlist> watchlists, Boolean hasNext) {
        this.products = watchlists.stream()
                .map(w -> new ProductDTO(w.getProduct()))
                .collect(Collectors.toList());
        products.forEach(ProductDTO::setWatchlist);

        this.hasNext = hasNext;
    }
}
