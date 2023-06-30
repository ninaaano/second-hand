package team4.codesquad.secondhand.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;
import team4.codesquad.secondhand.domain.Watchlist;
import team4.codesquad.secondhand.service.dto.WatchlistSearchCondition;

import java.util.List;

import static team4.codesquad.secondhand.domain.QCategory.category;
import static team4.codesquad.secondhand.domain.QLocation.location;
import static team4.codesquad.secondhand.domain.QProduct.product;
import static team4.codesquad.secondhand.domain.QUser.user;
import static team4.codesquad.secondhand.domain.QWatchlist.watchlist;

@RequiredArgsConstructor
public class WatchlistRepositoryImpl implements WatchlistRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    @Override
    public Slice<Watchlist> findFilteredWatchlist(Pageable pageable, WatchlistSearchCondition watchlistSearchCondition) {
        List<Watchlist> watchlists = queryFactory.selectFrom(watchlist)
                .join(watchlist.product, product).fetchJoin()
                .join(product.category, category).fetchJoin()
                .join(product.location, location).fetchJoin()
                .join(product.user, user).fetchJoin()
                .join(watchlist.user, user).fetchJoin()
                .where(watchlist.user.userId.eq(watchlistSearchCondition.getUserId()),
                        categoryEq(watchlistSearchCondition.getCategoryId()))
                .orderBy(watchlist.watchlistId.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize() + 1)
                .fetch();

        return new SliceImpl<>(watchlists, pageable, hasNextPage(watchlists, pageable.getPageSize()));
    }

    private BooleanExpression categoryEq(Integer categoryId) {
        if (categoryId == null) {
            return null;
        }
        return watchlist.product.category.categoryId.eq(categoryId);
    }

    private Boolean hasNextPage(List<Watchlist> watchlists, int pageSize) {
        if (watchlists.size() > pageSize) {
            watchlists.remove(pageSize);
            return true;
        }

        return false;
    }
}
