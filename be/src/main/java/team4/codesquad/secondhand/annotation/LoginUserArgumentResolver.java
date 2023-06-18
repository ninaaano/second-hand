package team4.codesquad.secondhand.annotation;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import team4.codesquad.secondhand.constant.UserProperty;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;

import static team4.codesquad.secondhand.constant.UserProperty.*;

public class LoginUserArgumentResolver implements HandlerMethodArgumentResolver {

    private static final String LOCATION_ID = "locationId";
    private static final String DISTRICT = "district";
    private static final String CITY = "city";
    private static final String TOWN = "town";

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAnnotation = parameter.hasParameterAnnotation(Login.class);
        boolean hasUserType = User.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAnnotation && hasUserType;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();

        User user = assembleUser(request);
        addPrimaryLocationToUser(request, user);
        addSecondaryLocationToUser(request, user);

        return user;
    }

    private User assembleUser(HttpServletRequest request) {
        return new User(
                (Integer) request.getAttribute(USER_ID),
                (String) request.getAttribute(AVATAR),
                (String) request.getAttribute(USERNAME)
        );
    }

    private void addPrimaryLocationToUser(HttpServletRequest request, User user) {
        if (request.getAttribute(UserProperty.PRIMARY_LOCATION) == null) {
            return;
        }

        LinkedHashMap<String, Object> primaryLocationAttributes = (LinkedHashMap<String, Object>) request.getAttribute(UserProperty.PRIMARY_LOCATION);
        Location primaryLocation = new Location(
                (Integer) primaryLocationAttributes.get(LOCATION_ID),
                (String) primaryLocationAttributes.get(DISTRICT),
                (String) primaryLocationAttributes.get(CITY),
                (String) primaryLocationAttributes.get(TOWN)
        );

        user.setPrimaryLocation(primaryLocation);
    }

    private void addSecondaryLocationToUser(HttpServletRequest request, User user) {
        if (request.getAttribute(UserProperty.SECONDARY_LOCATION) == null) {
            return;
        }

        LinkedHashMap<String, Object> secondaryLocationAttributes = (LinkedHashMap<String, Object>) request.getAttribute(UserProperty.SECONDARY_LOCATION);
        Location secondaryLocation = new Location(
                (Integer) secondaryLocationAttributes.get(LOCATION_ID),
                (String) secondaryLocationAttributes.get(DISTRICT),
                (String) secondaryLocationAttributes.get(CITY),
                (String) secondaryLocationAttributes.get(TOWN)
        );

        user.setSecondaryLocation(secondaryLocation);
    }
}
