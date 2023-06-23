package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.service.UserService;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/api/user/locations")
    public ResponseEntity<Message> userLocations(@Login User user) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_USER_LOCATION, userService.findLocationInfo(user));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
