package team4.codesquad.secondhand.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team4.codesquad.secondhand.domain.Location;
import team4.codesquad.secondhand.domain.User;
import team4.codesquad.secondhand.repository.LocationRepository;
import team4.codesquad.secondhand.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final LocationRepository locationRepository;

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional
    public User create(User user, Integer locationId) {
        Location primaryLocation = locationRepository.findById(locationId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 지역 정보 입력"));
        user.setPrimaryLocation(primaryLocation);
        return userRepository.save(user);
    }

    public Boolean checkUserExists(User user) {
        return userRepository.existsByUsername(user.getUsername());
    }
}
