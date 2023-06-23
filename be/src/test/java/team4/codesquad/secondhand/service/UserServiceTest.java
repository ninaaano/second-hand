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
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.repository.LocationRepository;
import team4.codesquad.secondhand.repository.UserRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private LocationRepository locationRepository;

    @Test
    @DisplayName("이미 회원가입한 유저인 경우 해당 유저 정보를 반환한다.")
    void findExistingUser() {
        // given
        User mockUser = new User("mock.jpg", "mockUser");
        BDDMockito.given(userRepository.findByUsername(mockUser.getUsername()))
                .willReturn(Optional.of(mockUser));

        // when
        User user = userService.findExistingUserOrCreateNewUser(mockUser.getUsername(), mockUser.getAvatar());

        // then
        assertThat(user).isEqualTo(mockUser);
    }

    @Test
    @DisplayName("새로 회원가입하는 유저인 경우 파라미터로 넘어온 유저 정보를 바탕으로 새로운 유저를 생성한다.")
    void createNewUser() {
        // given
        User mockUser = new User("mock.jpg", "mockUser");
        BDDMockito.given(userRepository.findByUsername(mockUser.getUsername()))
                .willReturn(Optional.empty());

        // when
        User user = userService.findExistingUserOrCreateNewUser(mockUser.getUsername(), mockUser.getAvatar());

        // then
        assertThat(user).usingRecursiveComparison().isEqualTo(mockUser);
    }

    @Test
    @DisplayName("이미 존재하는 회원이 회원가입 요청을 할 수 없다.")
    void signUpDuplicateFail() {
        // given
        BDDMockito.given(userRepository.existsByUsername(BDDMockito.any()))
                .willReturn(true);

        // when, then
        assertThatThrownBy(() -> userService.signUp(new User(), 1))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("이미 존재하는 회원이므로 중복 회원가입 불가");
    }

    @Test
    @DisplayName("존재하지 않는 지역으로 회원가입 요청을 할 수 없다.")
    void signUpInvalidLocationFail() {
        // given
        BDDMockito.given(userRepository.existsByUsername(BDDMockito.any()))
                .willReturn(false);

        BDDMockito.given(locationRepository.findById(BDDMockito.any()))
                .willReturn(Optional.empty());

        // when, then
        assertThatThrownBy(() -> userService.signUp(new User(), 1))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("존재하지 않는 지역 정보 입력");
    }

}