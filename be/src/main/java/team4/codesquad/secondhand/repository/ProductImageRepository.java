package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.domain.ProductImage;

import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {

    @Query("select pi from ProductImage pi " +
            "where pi.product.productId =: productId")
    Optional<ProductImage> findBy(@Param("productId") Integer productId);

    @Modifying
    @Query("delete from ProductImage pi " +
            "where pi.product.productId = :productId " +
            "and pi.imageUrl = :imageUrl")
    void deleteByProductIdAndImageUrl(@Param("productId") Integer productId, @Param("imageUrl") String imageUrl);
}
