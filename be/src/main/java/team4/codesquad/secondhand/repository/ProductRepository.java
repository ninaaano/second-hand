package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
