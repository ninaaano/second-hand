package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.domain.dto.Message;
import team4.codesquad.secondhand.service.CategoryService;


@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("api/category")
    private ResponseEntity<Message> category() {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_CATEGORY, categoryService.findAll());
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
