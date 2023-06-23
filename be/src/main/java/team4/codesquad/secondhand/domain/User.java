package team4.codesquad.secondhand.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String avatar;
    private String username;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "primary_location_id")
    private Location primaryLocation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "secondary_location_id")
    private Location secondaryLocation;

    public User(String avatar, String username) {
        this.avatar = avatar;
        this.username = username;
    }

    public User(Integer userId, String avatar, String username) {
        this.userId = userId;
        this.avatar = avatar;
        this.username = username;
    }

    public void setPrimaryLocation(Location primaryLocation) {
        this.primaryLocation = primaryLocation;
    }

    public boolean isSignUpInProgress() {
        return (userId == null);
    }
}
