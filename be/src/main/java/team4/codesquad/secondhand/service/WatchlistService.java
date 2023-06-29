package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.Watchlist;
import team4.codesquad.secondhand.repository.ProductRepository;
import team4.codesquad.secondhand.repository.UserRepository;
import team4.codesquad.secondhand.repository.WatchlistRepository;
import team4.codesquad.secondhand.service.dto.ProductDTO;
import team4.codesquad.secondhand.service.dto.ProductListDTO;
import team4.codesquad.secondhand.service.dto.WatchlistDTO;
import team4.codesquad.secondhand.service.dto.WatchlistSearchCondition;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class WatchlistService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final WatchlistRepository watchlistRepository;

    @Transactional
    public WatchlistDTO createWatchlist(Integer productId, User user) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));

        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));

        if (watchlistRepository.existsByUserAndProduct(user, product)) {
            throw new IllegalArgumentException("이미 관심등록된 상품");
        }

        Watchlist watchlist = watchlistRepository.save(new Watchlist(product, savedUser));
        return new WatchlistDTO(watchlist);
    }

    @Transactional
    public String deleteWatchlist(Integer productId, User user) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));

        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));

        Watchlist savedWatchlist = watchlistRepository.findByUserAndProduct(savedUser, product)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 관심 목록"));

        watchlistRepository.delete(savedWatchlist);

        return savedWatchlist.getWatchlistId() + "번 관심 목록 삭제 완료";
    }

    public ProductListDTO buildWatchlistProductListDTO(User user, Pageable pageable, WatchlistSearchCondition watchlistSearchCondition) {
        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));
        watchlistSearchCondition.setUserId(savedUser);

        Slice<Watchlist> sliceWithWatchlist = watchlistRepository.findFilteredWatchlist(pageable, watchlistSearchCondition);
        List<Watchlist> watchlists = sliceWithWatchlist.getContent();

        List<ProductDTO> products = watchlists.stream()
                .map(w -> new ProductDTO(w.getProduct()))
                .collect(Collectors.toList());

        ProductListDTO productListDTO = new ProductListDTO(products, sliceWithWatchlist.hasNext());
        productListDTO.setAllProductsToWatchlist();

        return productListDTO;
    }
}
