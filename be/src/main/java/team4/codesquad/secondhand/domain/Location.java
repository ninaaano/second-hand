package team4.codesquad.secondhand.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@ToString
public class Location {

    @Id
    @GeneratedValue
    private Integer locationId;

    private String district;
    private String city;
    private String town;
}
