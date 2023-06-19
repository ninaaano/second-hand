package team4.codesquad.secondhand.interceptor;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import team4.codesquad.secondhand.service.JwtService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static team4.codesquad.secondhand.constant.UserProperty.*;

@RequiredArgsConstructor
public class LoginInterceptor implements HandlerInterceptor {

    private static final String AUTHORIZATION = "Authorization";

    private final JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        String authorizationHeader = request.getHeader(AUTHORIZATION);
        Claims claims = jwtService.parseJwtToken(authorizationHeader);

        if (claims.get(USER_ID) == null) {
            throw new IllegalArgumentException("회원가입 진행 중이므로 리소스에 접근 불가");
        }

        request.setAttribute(USER_ID, claims.get(USER_ID));
        request.setAttribute(AVATAR, claims.get(AVATAR));
        request.setAttribute(USERNAME, claims.get(USERNAME));
        request.setAttribute(USER_ID, claims.get(USER_ID));
        request.setAttribute(PRIMARY_LOCATION, claims.get(PRIMARY_LOCATION));
        request.setAttribute(SECONDARY_LOCATION, claims.get(SECONDARY_LOCATION));
        return true;
    }
}
