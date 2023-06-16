package team4.codesquad.secondhand.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class OAuthUserInfoResponse {

    @JsonProperty("id")
    private String oauthId;

    @JsonProperty("login")
    private String userId;

    @JsonProperty("avatar_url")
    private String profileUrl;
}
