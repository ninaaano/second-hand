package team4.codesquad.secondhand.service;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import team4.codesquad.secondhand.domain.User;

import java.time.Duration;
import java.util.Date;

@Service
public class JwtService {

    private final String BEARER = "Bearer ";

    @Value("${jwt-secret}")
    private String jwtSecretKey;

    public String issueJwt(User user) {
        Date now = new Date();

        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("hyun")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(60).toMillis()))
                .claim("userId", user.getUserId())
                .claim("avatar", user.getAvatar())
                .claim("username", user.getUsername())
                .signWith(SignatureAlgorithm.HS256, jwtSecretKey)
                .compact();
    }

    public Claims parseJwt(String authorizationHeader) {
        validationAuthorizationHeader(authorizationHeader);
        String token = extractToken(authorizationHeader);

        try {
            return Jwts.parser()
                    .setSigningKey(jwtSecretKey)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException e) {
            throw new IllegalArgumentException("토큰 시간 만료");
        } catch (UnsupportedJwtException | MalformedJwtException e) {
            throw new IllegalArgumentException("유효하지 않은 토큰");
        } catch (SignatureException e) {
            throw new IllegalArgumentException("변조된 토큰");
        }
    }

    private void validationAuthorizationHeader(String header) {
        if (header == null || !header.startsWith(BEARER)) {
            throw new IllegalArgumentException("인증 헤더 없음");
        }
    }

    private String extractToken(String authorizationHeader) {
        return authorizationHeader.substring(BEARER.length());
    }
}
