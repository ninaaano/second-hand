package team4.codesquad.secondhand.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team4.codesquad.secondhand.constant.ClientClassifier;
import team4.codesquad.secondhand.service.dto.OAuthAccessTokenRequest;
import team4.codesquad.secondhand.service.dto.OAuthAccessTokenResponse;
import team4.codesquad.secondhand.service.dto.OAuthUserInfoResponse;

@Service
@Slf4j
public class OauthService {

    private final RestTemplate restTemplate;

    @Value("${access-token-url}")
    private String accessTokenUrl;

    @Value("${user-info-url}")
    private String userInfoUrl;

    public OauthService() {
        this.restTemplate = new RestTemplate();
    }

    public OAuthUserInfoResponse getGitHubUserInfoBy(String code, String clientType) {
        String accessToken = getAccessToken(code, clientType);
        return getOAuthUserInfo(accessToken);
    }

    private String getAccessToken(String code, String clientType) {
        return restTemplate.postForObject(accessTokenUrl,
                new OAuthAccessTokenRequest(ClientClassifier.getClientIdOf(clientType),
                        ClientClassifier.getClientSecretOf(clientType),
                        code),
                OAuthAccessTokenResponse.class).getAccessToken();
    }

    private OAuthUserInfoResponse getOAuthUserInfo(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<Void> request = new HttpEntity<>(headers);

        return restTemplate.exchange(userInfoUrl,
                HttpMethod.GET,
                request,
                OAuthUserInfoResponse.class).getBody();
    }
}
