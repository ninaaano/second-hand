package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Watchlist;

public interface WatchRepository extends JpaRepository<Watchlist, Integer> {

}
