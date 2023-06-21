package team4.codesquad.secondhand.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import team4.codesquad.secondhand.constant.Status;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

    private String title;
    private String contents;
    private Integer price;
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyyMMddHHmmss")
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
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

    public String getSellerId() {
        return user.getUsername();
    }

    public String getDetailedStatus() {
        return status.name();
    }

    public String getDetailedCategory() {
        return category.getName();
    }


    @Builder
    public Product(String title, String contents, Integer price, Location location, Category category, User user, List<ProductImage> productImages) {
        this.title = title;
        this.contents = contents;
        this.price = price;
        this.views = 0;
        this.status = Status.SALE;
        this.deleted = false;
        this.location = location;
        this.category = category;
        this.user = user;
        this.productImages = productImages;
        this.watchlists = new ArrayList<>();
        this.chatrooms = new ArrayList<>();
    }
}
