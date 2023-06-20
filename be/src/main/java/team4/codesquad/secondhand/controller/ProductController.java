package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.service.CategoryService;
import team4.codesquad.secondhand.service.ProductService;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final CategoryService categoryService;

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

    @GetMapping("api/product")
    public ResponseEntity<Message> writeProductForm(){
        Message message = new Message(HttpStatus.OK, "판매 정보 생성", categoryService.findAll());
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
