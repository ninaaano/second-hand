package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Location;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class LocationRepositoryTest {

    @Autowired
    private LocationRepository locationRepository;

    @Test
    void init() {
        List<Location> locations = locationRepository.findAll();
        System.out.println(locations.get(0));
    }
}