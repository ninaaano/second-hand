package team4.codesquad.secondhand.service;

import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import team4.codesquad.secondhand.domain.User;

import java.time.Duration;
import java.util.Date;

@Service
public class JwtService {

    @Value("${jwt-secret}")
    private String jwtSecretKey;

    public String issueJwtToken(User user) {
        Date now = new Date();

        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("hyun")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(60).toMillis()))
                .claim("userId", user.getUserId())
                .claim("avatar", user.getAvatar())
                .claim("username", user.getUsername())
                .claim("primaryLocation", user.getPrimaryLocation())
                .claim("secondaryLocation", user.getSecondaryLocation())
                .signWith(SignatureAlgorithm.HS256, jwtSecretKey)
                .compact();
    }
}
