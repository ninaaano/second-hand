package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team4.codesquad.secondhand.domain.Location;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LocationDTO {

    private String district;
    private String city;
    private String town;

    public LocationDTO(Location location) {
        this.district = location.getDistrict();
        this.city = location.getCity();
        this.town = location.getTown();
    }
}
