package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.dto.*;
import team4.codesquad.secondhand.service.JwtService;
import team4.codesquad.secondhand.service.LocationService;
import team4.codesquad.secondhand.service.UserService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private static final String ACCESS_CODE_URL = "https://github.com/login/oauth/authorize?client_id=Iv1.b2c72e9d29d91862";
    private static final String ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private static final String USER_INFO_URL = "https://api.github.com/user";

    private final UserService userService;
    private final JwtService jwtService;
    private final LocationService locationService;

    @Value("${client-id}")
    private String clientId;

    @Value("${client-secret}")
    private String clientSecret;

    @GetMapping("/login")
    public void getAccessCode(HttpServletResponse response) throws IOException {
        response.sendRedirect(ACCESS_CODE_URL);
    }

    @GetMapping("/callback")  // 투명 페이지
    public ResponseEntity<Message> login(@RequestParam String code) {
        RestTemplate restTemplate = new RestTemplate();

        String accessToken = getAccessToken(code, restTemplate);
        OAuthUserInfoResponse githubUser = getOAuthUserInfo(restTemplate, accessToken);

        User user = userService.findByUsername(githubUser.getUserId())
                .orElseGet(() -> new User(githubUser.getProfileUrl(), githubUser.getUserId()));

        if (user.isSignUpInProgress()) {
            Message message = new Message(HttpStatus.FOUND, ResponseMessage.SIGNUP_USER, user);
            return new ResponseEntity<>(message, HttpStatus.FOUND);
        }

        Message message = new Message(HttpStatus.OK, ResponseMessage.ISSUE_ACCESS_TOKEN, jwtService.issueJwtToken(user));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("/callback")           // 회원가입 진행 중: 지역 입력페이지에서 입력받은 정보를 처리하여 완벽한 User 생성
    public ResponseEntity<Message> completeSignUp(@RequestBody User user) {
        Location location = locationService.findLocation(user.getPrimaryLocation());
        user.setPrimaryLocation(location);
        User signUpUser = userService.create(user);

        Message message = new Message(HttpStatus.OK, ResponseMessage.ISSUE_ACCESS_TOKEN, jwtService.issueJwtToken(signUpUser));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    private String getAccessToken(String code, RestTemplate restTemplate) {
        return restTemplate.postForObject(ACCESS_TOKEN_URL,
                new OAuthAccessTokenRequest(clientId, clientSecret, code),
                OAuthAccessTokenResponse.class).getAccessToken();
    }

    private OAuthUserInfoResponse getOAuthUserInfo(RestTemplate restTemplate, String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<Void> request = new HttpEntity<>(headers);

        return restTemplate.exchange(USER_INFO_URL,
                HttpMethod.GET,
                request,
                OAuthUserInfoResponse.class).getBody();
    }
}
