package team4.codesquad.secondhand.constant;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ClientClassifier {

    private static final String FE = "fe";
    private static final String IOS = "ios";

    private static String feClientId;
    private static String feClientSecret;
    private static String iosClientId;
    private static String iosClientSecret;

    @Value("${fe-client-id}")
    public void setFeClientId(String feClientId) {
        this.feClientId = feClientId;
    }

    @Value("${fe-client-secret}")
    public void setFeClientSecret(String feClientSecret) {
        this.feClientSecret = feClientSecret;
    }

    @Value("${ios-client-id}")
    public void setIosClientId(String iosClientId) {
        this.iosClientId = iosClientId;
    }

    @Value("${ios-client-secret}")
    public void setIosClientSecret(String iosClientSecret) {
        this.iosClientSecret = iosClientSecret;
    }

    public static String getClientIdOf(String clientType) {
        if (clientType.equals(FE)) {
            return feClientId;
        }

        if (clientType.equals(IOS)) {
            return iosClientId;
        }

        throw new IllegalArgumentException("지원하지 않는 clientType");
    }

    public static String getClientSecretOf(String clientType) {
        if (clientType.equals(FE)) {
            return feClientSecret;
        }

        if (clientType.equals(IOS)) {
            return iosClientSecret;
        }

        throw new IllegalArgumentException("지원하지 않는 clientType");
    }
}
