package team4.codesquad.secondhand.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
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

    public User(String avatar, String username, Location primaryLocation) {
        this.avatar = avatar;
        this.username = username;
        this.primaryLocation = primaryLocation;
    }

    public User(String avatar, String username, Location primaryLocation, Location secondaryLocation) {
        this.avatar = avatar;
        this.username = username;
        this.primaryLocation = primaryLocation;
        this.secondaryLocation = secondaryLocation;
    }
}
