package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Location;

import java.util.Optional;

public interface LocationRepository extends JpaRepository<Location, Integer> {

    Optional<Location> findByDistrictAndCityAndTown(String district, String city, String town);
}
