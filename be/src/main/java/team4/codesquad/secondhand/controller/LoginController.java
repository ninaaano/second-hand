package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
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

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private static final String ACCESS_CODE_URL = "https://github.com/login/oauth/authorize?client_id=Iv1.b2c72e9d29d91862";
    private static final String ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private static final String USER_INFO_URL = "https://api.github.com/user";

    private final LocationService locationService;
    private final UserService userService;
    private final JwtService jwtService;

    @Value("${client-id}")
    private String clientId;

    @Value("${client-secret}")
    private String clientSecret;

    @GetMapping("/login")
    public void getAccessCode(HttpServletResponse response) throws IOException {
        response.sendRedirect(ACCESS_CODE_URL);
    }

    @GetMapping("/callback")
    public String getCodeAndAddLocalInfo(@RequestParam String code) {
        return "login.html";
    }

    @PostMapping("/callback")
    @ResponseBody
    public ResponseEntity<Message> login(@ModelAttribute LocationInputDTO locationInputDTO, @RequestParam String code) {
        RestTemplate restTemplate = new RestTemplate();

        String accessToken = getAccessToken(code, restTemplate);
        OAuthUserInfoResponse githubUser = getOAuthUserInfo(restTemplate, accessToken);

        Location location = locationService.findLocation(locationInputDTO.getDistrict(),
                locationInputDTO.getCity(),
                locationInputDTO.getTown());

        User savedUser = userService.createUser(new User(githubUser.getProfileUrl(), githubUser.getUserId(), location));

        Message message = new Message(HttpStatus.OK, ResponseMessage.ISSUE_ACCESS_TOKEN, jwtService.issueJwtToken(savedUser));
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
