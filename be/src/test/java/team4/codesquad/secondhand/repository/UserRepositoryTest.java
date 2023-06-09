package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team4.codesquad.secondhand.domain.User;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void init() {
        List<User> users = userRepository.findAll();
        System.out.println(users.get(0));

    }
}