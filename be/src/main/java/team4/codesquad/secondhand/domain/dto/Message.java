package team4.codesquad.secondhand.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Message {

    private final int statusCode;
    private final String message;
    private Object data;
}
