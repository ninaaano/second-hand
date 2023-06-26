package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.controller.dto.LocationsUpdateDTO;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.service.UserService;
import team4.codesquad.secondhand.service.dto.UserLocationInfoDTO;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/api/user/locations")
    public ResponseEntity<Message> userLocations(@Login User user) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_USER_LOCATION, userService.findLocationInfo(user));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PutMapping("/api/user/locations")
    public ResponseEntity<Message> updateUserLocations(@Login User user, @RequestBody LocationsUpdateDTO locationsUpdateDTO) {
        if (locationsUpdateDTO.getPrimaryLocationId() == null) {
            throw new IllegalArgumentException("필수 지역 정보 없음");
        }

        UserLocationInfoDTO userLocationInfoDTO = userService.updateLocationInfo(user, locationsUpdateDTO.getPrimaryLocationId(), locationsUpdateDTO.getSecondaryLocationId());

        Message message = new Message(HttpStatus.OK, ResponseMessage.UPDATE_USER_LOCATION, userLocationInfoDTO);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/api/user/validateToken")
    public ResponseEntity<Message> validateUserToken() {
        Message message = new Message(HttpStatus.OK, ResponseMessage.VALID_USER_TOKEN, null);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
