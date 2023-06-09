package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.ProductImage;

public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {

}
