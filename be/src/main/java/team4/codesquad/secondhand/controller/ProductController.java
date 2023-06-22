package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.service.ProductService;
import team4.codesquad.secondhand.service.dto.ProductRequestDTO;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("api/products")
    public ResponseEntity<Message> products(Pageable pageable) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_PRODUCT, productService.buildProductListDTO(pageable));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("api/products/{productId}")
    public ResponseEntity<Message> product(@PathVariable Integer productId) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_PRODUCT_DETAIL, productService.increaseViewsAndRetrieveProduct(productId));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("api/product")
    public ResponseEntity<Message> save(@RequestBody @Valid ProductRequestDTO request,@Login User user) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.PRODUCT_CREATE_OK, productService.createProduct(request,user));
        return new ResponseEntity<>(message,HttpStatus.OK);
    }
}
