package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.domain.User;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer>, ProductRepositoryCustom {

    @Query("SELECT p FROM Product p " +
            "LEFT JOIN FETCH p.user " +
            "LEFT JOIN FETCH p.category " +
            "WHERE p.productId = :productId")
    Optional<Product> findBy(@Param("productId") Integer productId);

    @Modifying
    @Query("UPDATE Product p set p.views = p.views + 1 WHERE p.productId = :productId")
    int countViews(@Param("productId") Integer productId);

    @Query("select p FROM Product p " +
            "left join fetch p.user " +
            "left join fetch p.location " +
            "where p.user = :user " +
            "and p.status = :status")
    Optional<List<Product>> findByUserAndStatus(User user, Status status);

}
