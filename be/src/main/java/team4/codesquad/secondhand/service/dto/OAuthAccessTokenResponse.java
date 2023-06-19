package team4.codesquad.secondhand.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class OAuthAccessTokenResponse {

    @JsonProperty("access_token")
    private String accessToken;
}
