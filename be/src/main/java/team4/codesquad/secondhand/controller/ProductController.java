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
import team4.codesquad.secondhand.service.CategoryService;
import team4.codesquad.secondhand.service.ProductService;
import team4.codesquad.secondhand.service.dto.ProductRequestDTO;
import team4.codesquad.secondhand.service.dto.ProductSearchCondition;
import team4.codesquad.secondhand.service.dto.ProductStatusUpdate;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final CategoryService categoryService;

    @GetMapping("/api/products")
    public ResponseEntity<Message> products(Pageable pageable, ProductSearchCondition productSearchCondition) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_PRODUCT, productService.buildProductListDTO(pageable, productSearchCondition));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/api/products/{productId}")
    public ResponseEntity<Message> product(@PathVariable Integer productId) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_PRODUCT_DETAIL, productService.increaseViewsAndRetrieveProduct(productId));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/api/products/writeForm")
    public ResponseEntity<Message> writeProductForm() {
        Message message = new Message(HttpStatus.OK, "판매 정보 생성", categoryService.findAll());
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("/api/products")
    public ResponseEntity<Message> save(@ModelAttribute @Valid ProductRequestDTO request, @Login User user) {
        if (request.getProductImages() == null) {
            throw new IllegalArgumentException("상품 이미지가 없습니다.");
        }
        Message message = new Message(HttpStatus.OK, ResponseMessage.PRODUCT_CREATE_OK, productService.createProduct(request, user));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @DeleteMapping("/api/products/{productId}")
    public ResponseEntity<String> delete(@Login User user, @PathVariable Integer productId) {
        if (productId == null) {
            throw new IllegalArgumentException("상품 ID가 유효하지 않습니다.");
        }
        productService.deleteProduct(productId);
        return new ResponseEntity<>(ResponseMessage.DELETE_PRODUCT_OK, HttpStatus.OK);
    }

    @PutMapping("/api/products/{productId}")
    public ResponseEntity<Message> update(@Login User user, @PathVariable Integer productId, @ModelAttribute ProductRequestDTO request) {
        if (productId == null) {
            throw new IllegalArgumentException("상품 ID가 유효하지 않습니다.");
        }
        Message message = new Message(HttpStatus.OK, ResponseMessage.UPDATE_PRODUCT_OK, productService.updateProduct(user, productId, request));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
  
    @GetMapping("/api/products/sales")
    public ResponseEntity<Message> userGetSalesProducts(@Login User user, Pageable pageable, ProductSearchCondition productSearchCondition) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.USERS_SALES_PRODUCTS_READ, productService.getUserSalesProducts(user, pageable, productSearchCondition));
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PutMapping("/api/products/{productId}/status")
    public ResponseEntity<String> updateProductStatus(@Login User user, @PathVariable Integer productId, @RequestBody ProductStatusUpdate request) {
        productService.updateProductStatus(productId,request.getStatus());
        return new ResponseEntity<>(ResponseMessage.UPDATE_PRODUCT_STATUS_OK, HttpStatus.OK);
    }

}
