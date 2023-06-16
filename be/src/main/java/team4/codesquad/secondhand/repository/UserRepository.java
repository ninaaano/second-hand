package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import team4.codesquad.secondhand.domain.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("select u from User u " +
            "left join fetch u.primaryLocation " +
            "left join fetch u.secondaryLocation " +
            "where u.username = :username")
    Optional<User> findByUsername(@Param("username") String username);
}
