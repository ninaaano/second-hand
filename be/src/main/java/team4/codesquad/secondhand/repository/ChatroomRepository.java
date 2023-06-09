package team4.codesquad.secondhand.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team4.codesquad.secondhand.domain.Chatroom;

public interface ChatroomRepository extends JpaRepository<Chatroom, Integer> {


}
