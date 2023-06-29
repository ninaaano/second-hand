package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.Watchlist;

import java.util.Optional;

public interface WatchlistRepository extends JpaRepository<Watchlist, Integer> {

    Boolean existsByUserAndProduct(User user, Product product);

    Optional<Watchlist> findByUserAndProduct(User user, Product product);
}
