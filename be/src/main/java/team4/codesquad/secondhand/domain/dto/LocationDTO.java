package team4.codesquad.secondhand.domain.dto;

import lombok.Getter;
import team4.codesquad.secondhand.domain.Location;

@Getter
public class LocationDTO {

    private final String district;
    private final String city;
    private final String town;

    public LocationDTO(Location location) {
        this.district = location.getDistrict();
        this.city = location.getCity();
        this.town = location.getTown();
    }
}
