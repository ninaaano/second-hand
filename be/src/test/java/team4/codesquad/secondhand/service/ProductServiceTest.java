package team4.codesquad.secondhand.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.SliceImpl;
import team4.codesquad.secondhand.constant.Status;
import team4.codesquad.secondhand.domain.*;
import team4.codesquad.secondhand.repository.ProductRepository;
import team4.codesquad.secondhand.service.dto.ProductDTO;
import team4.codesquad.secondhand.service.dto.ProductListDTO;
import team4.codesquad.secondhand.service.dto.ProductSearchCondition;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;

    @Test
    @DisplayName("한 페이지의 상품 정보들과 다음 페이지 존재 여부를 반환한다.")
    void buildProductListDTO() {
        // given
        Pageable pageable = PageRequest.of(0, 5);
        ProductSearchCondition productSearchCondition = new ProductSearchCondition(null, null, null, null);
        Location mockLocation = new Location(1, "모킹시", "모킹구", "모킹동");
        Category mockCategory = new Category(1, "모킹카테고리");
        User mockUser = new User(1, "mockAvatar.jpg", "mockUsername");
        List<ProductImage> productImages = List.of(new ProductImage());
        List<Chatroom> chatrooms = List.of(new Chatroom());
        List<Watchlist> watchlists = List.of(new Watchlist());

        List<Product> mockProducts = List.of(
                new Product(1, "모킹1", "모킹모킹1", 100, LocalDateTime.now(), LocalDateTime.now(), 1, Status.SALE, false, mockLocation, mockCategory, mockUser, productImages, chatrooms, watchlists),
                new Product(2, "모킹2", "모킹모킹2", 100, LocalDateTime.now(), LocalDateTime.now(), 1, Status.SALE, false, mockLocation, mockCategory, mockUser, productImages, chatrooms, watchlists),
                new Product(3, "모킹3", "모킹모킹3", 100, LocalDateTime.now(), LocalDateTime.now(), 1, Status.SALE, false, mockLocation, mockCategory, mockUser, productImages, chatrooms, watchlists),
                new Product(4, "모킹4", "모킹모킹4", 100, LocalDateTime.now(), LocalDateTime.now(), 1, Status.SALE, false, mockLocation, mockCategory, mockUser, productImages, chatrooms, watchlists),
                new Product(5, "모킹5", "모킹모킹5", 100, LocalDateTime.now(), LocalDateTime.now(), 1, Status.SALE, false, mockLocation, mockCategory, mockUser, productImages, chatrooms, watchlists)
        );

        List<ProductDTO> mockProductDTOList = mockProducts.stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList());

        SliceImpl<Product> mockSlice = new SliceImpl<>(mockProducts, pageable, true);

        BDDMockito.given(productRepository.findFilteredProducts(pageable, productSearchCondition))
                .willReturn(mockSlice);

        // when
        ProductListDTO productListDTO = productService.buildProductListDTO(pageable, productSearchCondition);

        // then
        assertThat(productListDTO.getProducts().size()).isEqualTo(pageable.getPageSize());
        assertThat(productListDTO.getHasNext()).isEqualTo(mockSlice.hasNext());
        assertThat(productListDTO.getProducts()).usingRecursiveComparison().isEqualTo(mockProductDTOList);
    }

    @Test
    void increaseViewsAndRetrieveProduct() {
    }
}