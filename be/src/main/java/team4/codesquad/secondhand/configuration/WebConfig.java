package team4.codesquad.secondhand.configuration;

import lombok.RequiredArgsConstructor;
import org.hibernate.criterion.Order;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import team4.codesquad.secondhand.annotation.LoginUserArgumentResolver;
import team4.codesquad.secondhand.interceptor.LoginInterceptor;
import team4.codesquad.secondhand.interceptor.SignUpInterceptor;
import team4.codesquad.secondhand.service.JwtService;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final JwtService jwtService;

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new LoginUserArgumentResolver());
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "HEAD", "PUT", "DELETE", "OPTIONS", "PATCH");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor())
                .order(Ordered.HIGHEST_PRECEDENCE)
                .addPathPatterns("/**")
                .excludePathPatterns("/api/login", "/api/signup", "/swagger-ui/**","/v3/api-docs/**", "/api/locations");

        registry.addInterceptor(signUpInterceptor())
                .addPathPatterns("/api/signup");
    }

    @Bean
    public LoginInterceptor loginInterceptor() {
        return new LoginInterceptor(jwtService);
    }

    @Bean
    public SignUpInterceptor signUpInterceptor() {
        return new SignUpInterceptor(jwtService);
    }
}
