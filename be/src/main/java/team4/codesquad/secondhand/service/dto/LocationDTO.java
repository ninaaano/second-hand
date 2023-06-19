package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team4.codesquad.secondhand.domain.Location;

@Getter
@Setter
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
