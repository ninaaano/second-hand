package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.repository.LocationRepository;
import team4.codesquad.secondhand.repository.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final LocationRepository locationRepository;

    public User findExistingUserOrCreateNewUser(String username, String avatar) {
        return userRepository.findByUsername(username)
                .orElseGet(() -> new User(avatar, username));
    }

    @Transactional
    public User signUp(User user, Integer locationId) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new IllegalArgumentException("이미 존재하는 회원이므로 중복 회원가입 불가");
        }

        Location primaryLocation = locationRepository.findById(locationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역 정보 입력"));
        user.setPrimaryLocation(primaryLocation);
        return userRepository.save(user);
    }
}
