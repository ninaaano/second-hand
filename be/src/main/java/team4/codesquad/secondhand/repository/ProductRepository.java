package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import team4.codesquad.secondhand.domain.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select p from Product p " +
            "left join fetch p.location " +
            "left join fetch p.category " +
            "left join fetch p.user ")
    List<Product> findAll();
}
