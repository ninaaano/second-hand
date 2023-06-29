package team4.codesquad.secondhand.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team4.codesquad.secondhand.annotation.Login;
import team4.codesquad.secondhand.constant.ResponseMessage;
import team4.codesquad.secondhand.controller.dto.Message;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.service.WatchlistService;
import team4.codesquad.secondhand.service.dto.ProductSearchCondition;
import team4.codesquad.secondhand.service.dto.WatchlistDTO;
import team4.codesquad.secondhand.service.dto.WatchlistSearchCondition;

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

    @DeleteMapping("/api/products/{productId}/watchlist")
    public ResponseEntity<Message> deleteProductFromWatchlist(@PathVariable Integer productId, @Login User user) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.DELETE_WATCHLIST, watchlistService.deleteWatchlist(productId, user));

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/api/products/watchlist")
    public ResponseEntity<Message> showWatchlistProducts(@Login User user, Pageable pageable, WatchlistSearchCondition watchlistSearchCondition) {
        Message message = new Message(HttpStatus.OK, ResponseMessage.READ_WATCHLIST, watchlistService.buildWatchlistProductListDTO(user, pageable, watchlistSearchCondition));

        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
