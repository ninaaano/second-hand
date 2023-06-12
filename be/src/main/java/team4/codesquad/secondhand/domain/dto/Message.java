package team4.codesquad.secondhand.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class Message {

    private final int statusCode;
    private final String message;
    private Object data;

    public Message(HttpStatus status, String message, Object data) {
        this.statusCode = status.value();
        this.message = message;
        this.data = data;
    }
}
