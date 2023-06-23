package team4.codesquad.secondhand.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.repository.LocationRepository;
import team4.codesquad.secondhand.service.dto.LocationListDTO;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class LocationServiceTest {

    @InjectMocks
    private LocationService locationService;

    @Mock
    private LocationRepository locationRepository;

    @Test
    @DisplayName("모든 지역 정보를 반환한다.")
    void buildLocationListDTO() {
        // given
        List<Location> mockLoacations = List.of(new Location(1, "모킹도1", "모킹구1", "모킹동1"), new Location(2, "모킹도2", "모킹구2", "모킹동2"));
        BDDMockito.given(locationRepository.findAll()).willReturn(mockLoacations);

        // when
        LocationListDTO locationListDTO = locationService.buildLocationListDTO();

        // then
        assertThat(locationListDTO.getLocations().size()).isEqualTo(mockLoacations.size());
        assertThat(locationListDTO.getLocations()).usingRecursiveComparison().isEqualTo(mockLoacations);
    }
}