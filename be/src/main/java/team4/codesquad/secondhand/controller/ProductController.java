package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.constant.StatusCode;
import team4.codesquad.secondhand.domain.dto.Message;
import team4.codesquad.secondhand.service.ProductService;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("api/products")
    public ResponseEntity<Message> products() {
        Message message = new Message(StatusCode.OK, ResponseMessage.READ_PRODUCT, productService.buildProductListDTO());
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
