package team4.codesquad.secondhand.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import team4.codesquad.secondhand.constant.Status;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@ToString
public class Product {

    @Id
    @GeneratedValue
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

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "product")
    List<ProductImage> productImages;
}
