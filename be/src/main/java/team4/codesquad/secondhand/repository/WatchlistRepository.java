package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.Watchlist;

public interface WatchlistRepository extends JpaRepository<Watchlist, Integer> {

    Boolean existsByUserAndProduct(User user, Product product);
}
