package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Category;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.Watchlist;
import team4.codesquad.secondhand.repository.CategoryRepository;
import team4.codesquad.secondhand.repository.ProductRepository;
import team4.codesquad.secondhand.repository.UserRepository;
import team4.codesquad.secondhand.repository.WatchlistRepository;
import team4.codesquad.secondhand.service.dto.*;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class WatchlistService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final WatchlistRepository watchlistRepository;
    private final CategoryRepository categoryRepository;

    @Transactional
    public WatchlistDTO createWatchlist(Integer productId, User user) {
        Product product = productRepository.findBy(productId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상품정보 조회"));

        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));

        if (watchlistRepository.existsByUserAndProduct(user, product)) {
            throw new IllegalArgumentException("이미 관심등록된 상품");
        }

        if (product.getUser().equals(savedUser)) {
            throw new IllegalArgumentException("자신의 판매상품은 관심등록할 수 없음");
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

    public WatchlistProductsDTO buildWatchlistProductListDTO(User user, Pageable pageable, WatchlistSearchCondition watchlistSearchCondition) {
        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));
        watchlistSearchCondition.setUserId(savedUser);

        Slice<Watchlist> sliceWithWatchlist = watchlistRepository.findFilteredWatchlist(pageable, watchlistSearchCondition);
        List<Watchlist> watchlists = sliceWithWatchlist.getContent();

        return new WatchlistProductsDTO(watchlists, sliceWithWatchlist.hasNext());
    }

    public CategoryListDTO buildWatchlistAllCategoryDTO(User user) {
        User savedUser = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));

        return new CategoryListDTO(categoryRepository.findAllCategoriesByUserWatchlist(savedUser).stream()
                .map(CategoryDTO::new)
                .collect(Collectors.toList()));
    }
}
