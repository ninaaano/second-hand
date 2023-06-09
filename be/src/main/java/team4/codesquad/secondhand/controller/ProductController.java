package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.domain.dto.ProductDTO;
import team4.codesquad.secondhand.service.ProductService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("api/products")
    public List<ProductDTO> products() {
        return productService.buildProductDTOList();
    }
}
