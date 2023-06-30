package team4.codesquad.secondhand.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team4.codesquad.secondhand.domain.User;

@Getter
@AllArgsConstructor
public class WatchlistSearchCondition {

    private Integer categoryId;
    private Integer userId;

    public void setUserId(User user) {
        this.userId = user.getUserId();
    }
}
