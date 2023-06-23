package team4.codesquad.secondhand.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import team4.codesquad.secondhand.controller.dto.Message;


@ControllerAdvice
public class ExceptionHandlers {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Message> handleNotFoundException(IllegalArgumentException e){
        Message message = new Message(HttpStatus.NOT_FOUND, e.getMessage(),null);
        return new ResponseEntity<>(message,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BindException.class)
    public ResponseEntity<Message> productRequestDTOValidationHandler(BindException e) {
        FieldError fieldError = e.getBindingResult().getFieldError();
        Message message = new Message(HttpStatus.BAD_REQUEST, fieldError.getDefaultMessage(), null);
        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
    }

}
