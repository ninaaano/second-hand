package team4.codesquad.secondhand.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import team4.codesquad.secondhand.domain.Watchlist;
import team4.codesquad.secondhand.service.dto.WatchlistSearchCondition;

public interface WatchlistRepositoryCustom {

    Slice<Watchlist> findFilteredWatchlist(Pageable pageable, WatchlistSearchCondition watchlistSearchCondition);

}
