package team4.codesquad.secondhand.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import team4.codesquad.secondhand.constant.Status;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@ToString
public class Product {

    @Id @GeneratedValue
    @Column(name = "id")
    private Integer productId;

    private String title;
    private String contents;
    private Integer price;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Integer views;
    @Enumerated(value = EnumType.STRING)
    private Status status;
    private Boolean deleted;

}
