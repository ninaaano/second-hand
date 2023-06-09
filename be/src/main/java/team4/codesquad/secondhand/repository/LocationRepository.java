package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {

}
