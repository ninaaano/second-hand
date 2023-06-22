package team4.codesquad.secondhand.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;

import java.time.Duration;
import java.util.Date;
import java.util.LinkedHashMap;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {JwtService.class})
class JwtServiceTest {

    @Autowired
    private JwtService jwtService;

    @Value("${jwt-secret}")
    private String jwtSecretKey;

    @Test
    @DisplayName("User 정보를 바탕으로 JWT가 만들어진다.")
    void issueJwt() {
        // given
        User mockUser = new User(1, "mock.jpg", "mockUser");

        // when
        String jwt = jwtService.issueJwt(mockUser);

        // then
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecretKey)
                .parseClaimsJws(jwt)
                .getBody();

        Integer userId = claims.get("userId", Integer.class);
        assertThat(userId).isEqualTo(mockUser.getUserId());

        String avatar = claims.get("avatar", String.class);
        assertThat(avatar).isEqualTo(mockUser.getAvatar());

        String username = claims.get("username", String.class);
        assertThat(username).isEqualTo(mockUser.getUsername());
    }

    @Test
    @DisplayName("JWT를 파싱하여 User 정보를 얻는다.")
    void parseJwtSuccess() {
        // given
        Location mockLocation = new Location(1, "모킹시", "모킹구", "모킹동");
        User mockUser = new User(1, "mock.jpg", "mockUser");
        mockUser.setPrimaryLocation(mockLocation);
        Date now = new Date();

        String jwt = Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("hyun")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(60).toMillis()))
                .claim("userId", mockUser.getUserId())
                .claim("avatar", mockUser.getAvatar())
                .claim("username", mockUser.getUsername())
                .claim("primaryLocation", mockUser.getPrimaryLocation())
                .claim("secondaryLocation", mockUser.getSecondaryLocation())
                .signWith(SignatureAlgorithm.HS256, jwtSecretKey)
                .compact();

        String authorizationHeader = "Bearer " + jwt;

        // when
        Claims claims = jwtService.parseJwt(authorizationHeader);

        // then
        Integer userId = claims.get("userId", Integer.class);
        assertThat(userId).isEqualTo(mockUser.getUserId());

        String avatar = claims.get("avatar", String.class);
        assertThat(avatar).isEqualTo(mockUser.getAvatar());

        String username = claims.get("username", String.class);
        assertThat(username).isEqualTo(mockUser.getUsername());

        LinkedHashMap claimLocation = claims.get("primaryLocation", LinkedHashMap.class);
        Location primaryLocation = new Location((Integer) claimLocation.get("locationId"),
                (String) claimLocation.get("district"),
                (String) claimLocation.get("city"),
                (String) claimLocation.get("town"));
        assertThat(primaryLocation).usingRecursiveComparison().isEqualTo(mockLocation);
    }

    @Test
    @DisplayName("시간이 만료된 JWT는 파싱할 수 없다")
    void parseExpiredJwtFail() {
        // given
        Location mockLocation = new Location(1, "모킹시", "모킹구", "모킹동");
        User mockUser = new User(1, "mock.jpg", "mockUser");
        mockUser.setPrimaryLocation(mockLocation);
        Date now = new Date();

        String expiredJwt = Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("hyun")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() - Duration.ofMinutes(60).toMillis()))
                .claim("userId", mockUser.getUserId())
                .claim("avatar", mockUser.getAvatar())
                .claim("username", mockUser.getUsername())
                .claim("primaryLocation", mockUser.getPrimaryLocation())
                .claim("secondaryLocation", mockUser.getSecondaryLocation())
                .signWith(SignatureAlgorithm.HS256, jwtSecretKey)
                .compact();

        String authorizationHeader = "Bearer " + expiredJwt;

        // when, then
        assertThatThrownBy(() -> jwtService.parseJwt(authorizationHeader))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("토큰 시간 만료");
    }

    @Test
    @DisplayName("유효하지 않은 JWT는 파싱할 수 없다")
    void parseInvalidJwtFail() {
        // given
        String invalidJwt = "invalidJwt임둥";

        String authorizationHeader = "Bearer " + invalidJwt;

        // when, then
        assertThatThrownBy(() -> jwtService.parseJwt(authorizationHeader))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("유효하지 않은 토큰");
    }
}