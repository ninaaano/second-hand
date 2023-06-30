package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team4.codesquad.secondhand.constant.Status;

@Getter
@NoArgsConstructor
public class ProductStatusUpdate {
    private Status status;
}
