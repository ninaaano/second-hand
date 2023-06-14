package team4.codesquad.secondhand.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import team4.codesquad.secondhand.domain.dto.OAuthAccessTokenRequest;
import team4.codesquad.secondhand.domain.dto.OAuthAccessTokenResponse;
import team4.codesquad.secondhand.domain.dto.OAuthUserInfoResponse;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@Slf4j
public class LoginController {

    @Value("${client-id}")
    private String clientId;

    @Value("${client-secret}")
    private String clientSecret;

    private static final String getAccessCodeUrl = "https://github.com/login/oauth/authorize?client_id=Iv1.b2c72e9d29d91862";
    private static final String getAccessTokenUrl = "https://github.com/login/oauth/access_token";
    private static final String getUserInfoUrl = "https://api.github.com/user";

    @GetMapping("/login")
    public void getAccessCode(HttpServletResponse response) throws IOException {
        response.sendRedirect(getAccessCodeUrl);
    }

    @GetMapping("/callback")
    public OAuthUserInfoResponse login(@RequestParam String code) {
        RestTemplate restTemplate = new RestTemplate();

        String accessToken = getAccessToken(code, restTemplate);
        OAuthUserInfoResponse user = getOAuthUserInfo(restTemplate, accessToken);
        return user;
    }

    private String getAccessToken(String code, RestTemplate restTemplate) {
        return restTemplate.postForObject(getAccessTokenUrl,
                new OAuthAccessTokenRequest(clientId, clientSecret, code),
                OAuthAccessTokenResponse.class).getAccessToken();
    }

    private OAuthUserInfoResponse getOAuthUserInfo(RestTemplate restTemplate, String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<Void> request = new HttpEntity<>(headers);

        return restTemplate.exchange(getUserInfoUrl,
                HttpMethod.GET,
                request,
                OAuthUserInfoResponse.class).getBody();
    }
}