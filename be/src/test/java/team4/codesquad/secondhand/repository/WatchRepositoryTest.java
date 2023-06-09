package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Watchlist;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class WatchRepositoryTest {

    @Autowired
    private WatchRepository watchRepository;

    @Test
    void init() {
        List<Watchlist> watchlists = watchRepository.findAll();
        System.out.println(watchlists.size());
    }

}