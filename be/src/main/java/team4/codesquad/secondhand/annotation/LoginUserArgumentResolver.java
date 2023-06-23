package team4.codesquad.secondhand.annotation;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import team4.codesquad.secondhand.domain.User;

import javax.servlet.http.HttpServletRequest;

import static team4.codesquad.secondhand.constant.UserProperty.*;

public class LoginUserArgumentResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAnnotation = parameter.hasParameterAnnotation(Login.class);
        boolean hasUserType = User.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAnnotation && hasUserType;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();
        return assembleUser(request);
    }

    private User assembleUser(HttpServletRequest request) {
        return new User(
                (Integer) request.getAttribute(USER_ID),
                (String) request.getAttribute(AVATAR),
                (String) request.getAttribute(USERNAME)
        );
    }
}
