package team4.codesquad.secondhand.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import team4.codesquad.secondhand.domain.Product;

public interface ProductRepositoryCustom {
    Slice<Product> findFilteredProducts(Pageable pageable);
}
