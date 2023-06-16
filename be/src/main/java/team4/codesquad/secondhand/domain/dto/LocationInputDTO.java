package team4.codesquad.secondhand.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LocationInputDTO {

    private final String district;
    private final String city;
    private final String town;
}
