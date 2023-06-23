package team4.codesquad.secondhand.interceptor;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.web.servlet.HandlerInterceptor;
import team4.codesquad.secondhand.service.JwtService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static team4.codesquad.secondhand.constant.UserProperty.*;

@RequiredArgsConstructor
public class SignUpInterceptor implements HandlerInterceptor {
    private static final String AUTHORIZATION = "Authorization";

    private final JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        String authorizationHeader = request.getHeader(AUTHORIZATION);
        Claims claims = jwtService.parseJwt(authorizationHeader);

        if (claims.get(USER_ID) != null) {
            throw new IllegalArgumentException("이미 존재하는 회원이므로, 회원 가입 불가");
        }

        request.setAttribute(AVATAR, claims.get(AVATAR));
        request.setAttribute(USERNAME, claims.get(USERNAME));
        return true;
    }
}
