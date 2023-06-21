package team4.codesquad.secondhand.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;
import team4.codesquad.secondhand.domain.*;

import java.util.List;

import static team4.codesquad.secondhand.domain.QCategory.category;
import static team4.codesquad.secondhand.domain.QLocation.location;
import static team4.codesquad.secondhand.domain.QProduct.product;
import static team4.codesquad.secondhand.domain.QUser.user;

@RequiredArgsConstructor
public class ProductRepositoryImpl implements ProductRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Slice<Product> findFilteredProducts(Pageable pageable) {
        List<Product> products = queryFactory.selectFrom(product)
                .leftJoin(product.location, location).fetchJoin()
                .leftJoin(product.category, category).fetchJoin()
                .leftJoin(product.user, user).fetchJoin()
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize() + 1)
                .fetch();

        return new SliceImpl<>(products, pageable, hasNextPage(products, pageable.getPageSize()));
    }

    private Boolean hasNextPage(List<Product> products, int pageSize) {
        if (products.size() > pageSize) {
            products.remove(pageSize);
            return true;
        }

        return false;
    }
}
