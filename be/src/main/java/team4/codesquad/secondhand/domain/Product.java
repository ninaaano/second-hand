package team4.codesquad.secondhand.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team4.codesquad.secondhand.constant.Status;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "location_id")
    private Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "product")
    private List<ProductImage> productImages;

    @OneToMany(mappedBy = "product")
    private List<Chatroom> chatrooms;

    @OneToMany(mappedBy = "product")
    private List<Watchlist> watchlists;

    public ProductImage findMainProductImage() {
        if (productImages.isEmpty()) {
            return null;
        }
        return productImages.get(0);
    }

    public int calculateChatroomCount() {
        return chatrooms.size();
    }

    public int calculateWatchlistCount() {
        return watchlists.size();
    }
}
