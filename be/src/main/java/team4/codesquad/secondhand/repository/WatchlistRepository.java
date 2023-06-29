package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.domain.Category;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.Watchlist;

import java.util.List;
import java.util.Optional;

public interface WatchlistRepository extends JpaRepository<Watchlist, Integer>, WatchlistRepositoryCustom {

    Boolean existsByUserAndProduct(User user, Product product);

    Optional<Watchlist> findByUserAndProduct(User user, Product product);

    List<Watchlist> findByUserAndProductIn(User user, List<Product> products);
}
