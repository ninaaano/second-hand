package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.User;

import java.util.List;

@SpringBootTest
@Transactional
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void init() {
        List<User> users = userRepository.findAll();
        System.out.println(users.get(0));

    }
}