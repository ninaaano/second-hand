package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.domain.dto.LocationInputDTO;
import team4.codesquad.secondhand.domain.dto.OAuthAccessTokenRequest;
import team4.codesquad.secondhand.domain.dto.OAuthAccessTokenResponse;
import team4.codesquad.secondhand.domain.dto.OAuthUserInfoResponse;
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
    public User login(@ModelAttribute LocationInputDTO locationInputDTO, @RequestParam String code) {
        RestTemplate restTemplate = new RestTemplate();

        String accessToken = getAccessToken(code, restTemplate);
        OAuthUserInfoResponse githubUser = getOAuthUserInfo(restTemplate, accessToken);

        Location location = locationService.findLocation(locationInputDTO.getDistrict(),
                locationInputDTO.getCity(),
                locationInputDTO.getTown());

        return userService.createUser(new User(githubUser.getProfileUrl(), githubUser.getUserId(), location));
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
