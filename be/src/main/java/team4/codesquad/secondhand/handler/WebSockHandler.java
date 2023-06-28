package team4.codesquad.secondhand.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import team4.codesquad.secondhand.service.ChatService;
import team4.codesquad.secondhand.service.dto.ChatMessage;
import team4.codesquad.secondhand.service.dto.ChatRoom;

import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor

public class WebSockHandler extends TextWebSocketHandler {

    private final ObjectMapper objectMapper;
    private final ChatService chatService;


    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        String payload = message.getPayload();
        log.info("payload {}", payload);
        ChatMessage chatMessage = objectMapper.readValue(payload, ChatMessage.class);
        ChatRoom roomId = chatService.findRoomById(chatMessage.getRoomId());
        roomId.handleActions(session, chatMessage, chatService);

    }

}
