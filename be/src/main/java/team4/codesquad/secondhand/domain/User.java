package team4.codesquad.secondhand.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue
    private Integer userId;

    private String avatar;
    private String username;

    @ManyToOne
    @JoinColumn(name = "primary_location_id")
    private Location primaryLocation;
}
