package team4.codesquad.secondhand.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Chatroom;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class ChatroomRepositoryTest {

    @Autowired
    private ChatroomRepository chatroomRepository;

    @Test
    void init() {
        List<Chatroom> chatrooms = chatroomRepository.findAll();
        System.out.println(chatrooms.size());
    }

}