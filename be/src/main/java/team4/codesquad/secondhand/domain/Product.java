package team4.codesquad.secondhand.domain;

import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import team4.codesquad.secondhand.constant.Status;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

    private String title;
    private String contents;
    private Integer price;
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

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductImage> productImages = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<Chatroom> chatrooms = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<Watchlist> watchlists = new ArrayList<>();

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

    public int getDetailedLocationId(){
        return location.getLocationId();
    }

    public void addProductImage(ProductImage productImage) {
        productImages.add(productImage);
        productImage.setProduct(this);
    }

    @Builder
    public Product(String title, String contents, Integer price, Location location, Category category, User user) {
        this.title = title;
        this.contents = contents;
        this.price = price;
        this.views = 0;
        this.status = Status.SALE;
        this.deleted = false;
        this.location = location;
        this.category = category;
        this.user = user;
    }
}
