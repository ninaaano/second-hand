package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.service.WatchlistService;
import team4.codesquad.secondhand.service.dto.WatchlistDTO;

@RestController
@RequiredArgsConstructor
public class WatchlistController {

    private final WatchlistService watchlistService;

    @PostMapping("/api/products/{productId}/watchlist")
    public ResponseEntity<Message> addProductToWatchlist(@PathVariable Integer productId, @Login User user) {
        WatchlistDTO watchlistDTO = watchlistService.createWatchlist(productId, user);
        Message message = new Message(HttpStatus.OK, ResponseMessage.CREATE_WATCHLIST, watchlistDTO);

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
