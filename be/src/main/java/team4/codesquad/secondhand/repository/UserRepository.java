package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
