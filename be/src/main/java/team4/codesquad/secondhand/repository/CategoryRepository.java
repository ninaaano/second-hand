package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.domain.Category;
import team4.codesquad.secondhand.domain.User;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query("select distinct c from Watchlist w " +
            "join w.product p " +
            "join p.category c " +
            "where w.user = :user")
    List<Category> findAllCategoriesByUserWatchlist(@Param("user") User user);
}
