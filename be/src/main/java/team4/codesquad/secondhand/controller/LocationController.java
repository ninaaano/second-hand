package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.domain.dto.Message;
import team4.codesquad.secondhand.service.LocationService;

@RestController
@RequiredArgsConstructor
public class LocationController {

    private final LocationService locationService;

    @GetMapping("/api/locations")
    public ResponseEntity<Message> locations() {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_LOCATION, locationService.buildLocationListDTO());
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
