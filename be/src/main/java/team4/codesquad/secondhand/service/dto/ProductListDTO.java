package team4.codesquad.secondhand.service.dto;

import lombok.Getter;

import java.util.List;
import java.util.Queue;

@Getter
public class ProductListDTO {

    private final List<ProductDTO> products;

    private final Boolean hasNext;


    public ProductListDTO(List<ProductDTO> products, Boolean hasNext) {
        this.products = products;
        this.hasNext = hasNext;
    }

    public ProductListDTO(List<ProductDTO> products, Boolean hasNext, Queue<WatchlistDTO> watchlistDTOs) {
        this.products = products;
        this.hasNext = hasNext;

        products.forEach(productDTO -> {
            if (!watchlistDTOs.isEmpty() && (productDTO.getProductId() == watchlistDTOs.peek().getProductId())) {
                productDTO.setWatchlist();
                watchlistDTOs.poll();
            }
        });
    }

    public void setAllProductsToWatchlist() {
        products.forEach(ProductDTO::setWatchlist);
    }
}
