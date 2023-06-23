package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.repository.LocationRepository;
import team4.codesquad.secondhand.repository.UserRepository;
import team4.codesquad.secondhand.service.dto.UserLocationInfoDTO;

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

        modifyUserPrimaryLocation(locationId, user);
        return userRepository.save(user);
    }

    public UserLocationInfoDTO findLocationInfo(User user) {
        User savedUser = findBy(user.getUserId());

        return new UserLocationInfoDTO(savedUser.getPrimaryLocation(), savedUser.getSecondaryLocation());
    }

    @Transactional
    public UserLocationInfoDTO updateLocationInfo(User user, Integer primaryLocationId, Integer secondaryLocationId) {
        User savedUser = findBy(user.getUserId());

        modifyUserPrimaryLocation(primaryLocationId, savedUser);
        modifyUserSecondaryLocation(secondaryLocationId, savedUser);

        return new UserLocationInfoDTO(savedUser);
    }

    private User findBy(Integer userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원"));
    }

    private void modifyUserPrimaryLocation(Integer primaryLocationId, User savedUser) {
        Location primaryLocation = locationRepository.findById(primaryLocationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역 정보 입력"));
        savedUser.setPrimaryLocation(primaryLocation);
    }

    private void modifyUserSecondaryLocation(Integer secondaryLocationId, User savedUser) {
        if (secondaryLocationId == null) {
            savedUser.setSecondaryLocation(null);
            return;
        }

        Location secondaryLocation = locationRepository.findById(secondaryLocationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역 정보 입력"));
        savedUser.setSecondaryLocation(secondaryLocation);
    }
}
