package team4.codesquad.secondhand.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import team4.codesquad.secondhand.domain.Product;
import team4.codesquad.secondhand.service.dto.ProductSearchCondition;

public interface ProductRepositoryCustom {
    Slice<Product> findFilteredProducts(Pageable pageable, ProductSearchCondition productSearchCondition);
}
