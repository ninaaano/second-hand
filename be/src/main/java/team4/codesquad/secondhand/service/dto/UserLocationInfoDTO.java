package team4.codesquad.secondhand.service.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;

@RequiredArgsConstructor
@Getter
public class UserLocationInfoDTO {

    private final Location primaryLocation;
    private final Location secondaryLocation;

    public UserLocationInfoDTO(User user) {
        this.primaryLocation = user.getPrimaryLocation();
        this.secondaryLocation = user.getSecondaryLocation();
    }
}
