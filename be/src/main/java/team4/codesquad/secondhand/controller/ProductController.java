package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.service.ProductService;
import team4.codesquad.secondhand.service.dto.ProductRequestDTO;

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

    // TODO : 상품 판매
    @PostMapping("api/product")
    public ResponseEntity<Message> save(@RequestBody ProductRequestDTO request){
        Message message = new Message(HttpStatus.OK, ResponseMessage.CREATE_OK, productService.createProduct(request));
        return new ResponseEntity<>(message,HttpStatus.OK);
    }
}
