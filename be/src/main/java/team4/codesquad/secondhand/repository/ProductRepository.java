package team4.codesquad.secondhand.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.domain.Product;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select p from Product p " +
            "left join fetch p.location " +
            "left join fetch p.category " +
            "left join fetch p.user", countQuery = "select count(p) from Product p")
    Page<Product> findAll(Pageable pageable);

    @Query("SELECT p FROM Product p " +
            "LEFT JOIN FETCH p.user " +
            "LEFT JOIN FETCH p.category " +
            "WHERE p.productId = :productId")
    Optional<Product> findByIdWithRelatedFields(@Param("productId") Integer productId);

    @Modifying
    @Query("UPDATE Product p set p.views = p.views + 1 WHERE p.productId = :productId")
    int updateViews(@Param("productId") Integer productId);
}
