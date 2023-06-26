package team4.codesquad.secondhand.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.*;
import team4.codesquad.secondhand.service.dto.ProductSearchCondition;

import java.util.List;

import static team4.codesquad.secondhand.domain.QCategory.category;
import static team4.codesquad.secondhand.domain.QLocation.location;
import static team4.codesquad.secondhand.domain.QProduct.product;
import static team4.codesquad.secondhand.domain.QUser.user;

@RequiredArgsConstructor
public class ProductRepositoryImpl implements ProductRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Slice<Product> findFilteredProducts(Pageable pageable, ProductSearchCondition productSearchCondition) {
        List<Product> products = queryFactory.selectFrom(product)
                .leftJoin(product.location, location).fetchJoin()
                .leftJoin(product.category, category).fetchJoin()
                .leftJoin(product.user, user).fetchJoin()
                .where(product.deleted.eq(false),
                        locationEq(productSearchCondition.getLocationId()),
                        categoryEq(productSearchCondition.getCategoryId()),
                        saleStatusEq(productSearchCondition.getSaleStatus()),
                        userEq(productSearchCondition.getUserId()))
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

    private BooleanExpression locationEq(Integer locationId) {
        if (locationId == null) {
            return null;
        }
        return product.location.locationId.eq(locationId);
    }

    private BooleanExpression categoryEq(Integer categoryId) {
        if (categoryId == null) {
            return null;
        }
        return product.category.categoryId.eq(categoryId);
    }

    private BooleanExpression saleStatusEq(String saleStatus) {
        if (saleStatus == null) {
            return product.status.in(List.of(Status.SALE, Status.RESERVED));
        }
        return product.status.eq(Status.valueOf(saleStatus));
    }

    private BooleanExpression userEq(Integer userId) {
        if (userId == null) {
            return null;
        }
        return product.user.userId.eq(userId);
    }
}
