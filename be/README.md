# ER 다이어그램
![스크린샷 2023-06-12 오전 11 45 38](https://github.com/codesquad-members-2023/second-hand/assets/95615105/20b7306b-4bee-4afb-8fce-cfc2b44360d3)

# DDL 쿼리
```sql
-- -----------------------------------------------------
-- Table `second_hand`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`category`
(
    `category_id` INT         NOT NULL AUTO_INCREMENT,
    `name`        VARCHAR(50) NOT NULL,
    `image_url`   TEXT        NULL,
    PRIMARY KEY (`category_id`)
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;



-- -----------------------------------------------------
-- Table `second_hand`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`location`
(
    `location_id` INT         NOT NULL AUTO_INCREMENT,
    `district`    VARCHAR(40) NOT NULL,
    `city`        VARCHAR(40) NOT NULL,
    `town`        VARCHAR(40) NOT NULL,
    PRIMARY KEY (`location_id`)
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;



-- -----------------------------------------------------
-- Table `second_hand`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`user`
(
    `user_id`               INT         NOT NULL AUTO_INCREMENT,
    `avatar`                TEXT        NULL DEFAULT NULL,
    `username`              VARCHAR(50) NOT NULL,
    `primary_location_id`   INT         NOT NULL,
    `secondary_location_id` INT         NULL DEFAULT NULL,
    PRIMARY KEY (`user_id`),
    INDEX `fk_user_location1_idx` (`primary_location_id` ASC) VISIBLE,
    INDEX `fk_user_location2_idx` (`secondary_location_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_location1`
        FOREIGN KEY (`primary_location_id`)
            REFERENCES `second_hand`.`location` (`location_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT `fk_user_location2`
        FOREIGN KEY (`secondary_location_id`)
            REFERENCES `second_hand`.`location` (`location_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;



-- -----------------------------------------------------
-- Table `second_hand`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`product`
(
    `product_id`  INT            NOT NULL AUTO_INCREMENT,
    `title`       VARCHAR(50)    NOT NULL,
    `contents`    TEXT           NOT NULL,
    `price`       DECIMAL(10, 2) NOT NULL,
    `created_at`  DATETIME       NULL DEFAULT NULL,
    `modified_at` DATETIME       NULL DEFAULT NULL,
    `views`       INT            NULL DEFAULT NULL,
    `status`      VARCHAR(10)    NULL DEFAULT NULL,
    `deleted`     TINYINT        NULL DEFAULT NULL,
    `category_id` INT            NOT NULL,
    `location_id` INT            NOT NULL,
    `user_id`     INT            NOT NULL,
    PRIMARY KEY (`product_id`),
    INDEX `fk_product_category_idx` (`category_id` ASC) VISIBLE,
    INDEX `fk_product_location1_idx` (`location_id` ASC) VISIBLE,
    INDEX `fk_product_user1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_product_category`
        FOREIGN KEY (`category_id`)
            REFERENCES `second_hand`.`category` (`category_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT `fk_product_location1`
        FOREIGN KEY (`location_id`)
            REFERENCES `second_hand`.`location` (`location_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT `fk_product_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `second_hand`.`user` (`user_id`)
            ON DELETE CASCADE
            ON UPDATE CASCADE
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;



-- -----------------------------------------------------
-- Table `second_hand`.`chatroom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`chatroom`
(
    `chatroom_id` INT      NOT NULL AUTO_INCREMENT,
    `created_at`  DATETIME NULL DEFAULT NULL,
    `deleted`     TINYINT  NULL DEFAULT NULL,
    `seller_id`   INT      NOT NULL,
    `buyer_id`    INT      NOT NULL,
    `product_id`  INT      NOT NULL,
    PRIMARY KEY (`chatroom_id`),
    INDEX `fk_chatroom_user1_idx` (`seller_id` ASC) VISIBLE,
    INDEX `fk_chatroom_user2_idx` (`buyer_id` ASC) VISIBLE,
    INDEX `fk_chatroom_product1_idx` (`product_id` ASC) VISIBLE,
    CONSTRAINT `fk_chatroom_product1`
        FOREIGN KEY (`product_id`)
            REFERENCES `second_hand`.`product` (`product_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT `fk_chatroom_user1`
        FOREIGN KEY (`seller_id`)
            REFERENCES `second_hand`.`user` (`user_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT `fk_chatroom_user2`
        FOREIGN KEY (`buyer_id`)
            REFERENCES `second_hand`.`user` (`user_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `second_hand`.`chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`chat`
(
    `chat_id`     INT           NOT NULL AUTO_INCREMENT,
    `contents`    VARCHAR(2000) NOT NULL,
    `created_at`  DATETIME      NULL DEFAULT NULL,
    `deleted`     TINYINT       NULL DEFAULT NULL,
    `user_id`     INT           NOT NULL,
    `chatroom_id` INT           NOT NULL,
    PRIMARY KEY (`chat_id`),
    INDEX `fk_chat_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_chat_chatroom1_idx` (`chatroom_id` ASC) VISIBLE,
    CONSTRAINT `fk_chat_chatroom1`
        FOREIGN KEY (`chatroom_id`)
            REFERENCES `second_hand`.`chatroom` (`chatroom_id`)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT `fk_chat_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `second_hand`.`user` (`user_id`)
            ON DELETE NO ACTION
            ON UPDATE CASCADE
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;



-- -----------------------------------------------------
-- Table `second_hand`.`product_image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`product_image`
(
    `product_image_id` INT  NOT NULL AUTO_INCREMENT,
    `image_url`        TEXT NULL DEFAULT NULL,
    `product_id`       INT  NOT NULL,
    PRIMARY KEY (`product_image_id`),
    INDEX `fk_product_image_product1_idx` (`product_id` ASC) VISIBLE,
    CONSTRAINT `fk_product_image_product1`
        FOREIGN KEY (`product_id`)
            REFERENCES `second_hand`.`product` (`product_id`)
            ON DELETE CASCADE
            ON UPDATE CASCADE
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;



-- -----------------------------------------------------
-- Table `second_hand`.`watchlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `second_hand`.`watchlist`
(
    `watchlist_id` INT NOT NULL AUTO_INCREMENT,
    `product_id`   INT NOT NULL,
    `user_id`      INT NOT NULL,
    PRIMARY KEY (`watchlist_id`),
    INDEX `fk_watchlist_product1_idx` (`product_id` ASC) VISIBLE,
    INDEX `fk_watchlist_user1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_watchlist_product1`
        FOREIGN KEY (`product_id`)
            REFERENCES `second_hand`.`product` (`product_id`)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT `fk_watchlist_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `second_hand`.`user` (`user_id`)
            ON DELETE CASCADE
            ON UPDATE CASCADE
)
    ENGINE = InnoDB
    collate utf8mb4_general_ci;

```
