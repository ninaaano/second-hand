package team4.codesquad.secondhand.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.domain.dto.Message;

@ControllerAdvice
public class ExceptionHandlers {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Message> handleNotFoundException(IllegalArgumentException e){
        Message message = new Message(HttpStatus.BAD_REQUEST, e.getMessage(),null);
        return new ResponseEntity<>(message,HttpStatus.BAD_REQUEST);
    }

}
