package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team4.codesquad.secondhand.domain.Location;

import java.util.List;

@Getter
@AllArgsConstructor
public class LocationListDTO {

    private List<Location> locations;
}
