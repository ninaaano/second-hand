package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class UserSalesProductListDTO {
    private final List<UserSalesProductDTO> productList;
}
