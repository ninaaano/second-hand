package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.LocationIdInputDTO;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.service.JwtService;
import team4.codesquad.secondhand.service.LocationService;
import team4.codesquad.secondhand.service.OauthService;
import team4.codesquad.secondhand.service.UserService;
import team4.codesquad.secondhand.service.dto.OAuthUserInfoResponse;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final UserService userService;
    private final JwtService jwtService;
    private final LocationService locationService;
    private final OauthService oauthService;

    @GetMapping("/login")
    public ResponseEntity<Message> login(@RequestParam String code, @RequestParam String clientType) {
        OAuthUserInfoResponse githubUser = oauthService.getGitHubUserInfoBy(code, clientType);

        User user = userService.findByUsername(githubUser.getUserId())
                .orElseGet(() -> new User(githubUser.getProfileUrl(), githubUser.getUserId()));

        if (user.isSignUpInProgress()) {
            Message message = new Message(HttpStatus.FOUND, ResponseMessage.SIGNUP_USER, jwtService.issueJwt(user));
            return new ResponseEntity<>(message, HttpStatus.FOUND);
        }

        Message message = new Message(HttpStatus.OK, ResponseMessage.ISSUE_ACCESS_TOKEN, jwtService.issueJwt(user));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<Message> completeSignUp(@RequestBody LocationIdInputDTO locationIdInputDTO, @Login User user) {
        if (userService.checkUserExists(user)) {
            throw new IllegalArgumentException("이미 존재하는 회원이므로 중복 회원가입 불가");
        }

        Location location = locationService.findBy(locationIdInputDTO.getLocationId());
        user.setPrimaryLocation(location);
        User signUpUser = userService.create(user);

        Message message = new Message(HttpStatus.OK, ResponseMessage.ISSUE_ACCESS_TOKEN, jwtService.issueJwt(signUpUser));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
