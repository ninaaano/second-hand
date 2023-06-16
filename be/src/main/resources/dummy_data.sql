insert into location (location_id, district, city, town)
values (1, '서울시', '강남구', '역삼1동'),
       (2, '서울시', '강남구', '역삼2동'),
       (3, '서울시', '강남구', '신사동'),
       (4, '서울시', '강남구', '압구정동'),
       (5, '서울시', '강남구', '청담동'),
       (6, '서울시', '강남구', '논현1동'),
       (7, '서울시', '강남구', '논현2동'),
       (8, '서울시', '강남구', '삼성1동'),
       (9, '서울시', '강남구', '삼성2동'),
       (10, '서울시', '강남구', '도곡1동'),
       (11, '서울시', '강남구', '도곡2동'),
       (12, '서울시', '강남구', '대치1동'),
       (13, '서울시', '강남구', '대치2동'),
       (14, '서울시', '강남구', '대치4동'),
       (15, '서울시', '강남구', '개포1동'),
       (16, '서울시', '강남구', '개포2동'),
       (17, '서울시', '강남구', '개포3동'),
       (18, '서울시', '강남구', '개포4동'),
       (19, '서울시', '강남구', '일원1동'),
       (20, '서울시', '강남구', '일원본동'),
       (21, '서울시', '강남구', '수서동'),
       (22, '서울시', '강남구', '세곡동');

insert into category (category_id, name)
values (1, '디지털기기'),
       (2, '생활가전'),
       (3, '가구/인테리어'),
       (4, '생활/주방'),
       (5, '유아동'),
       (6, '유아도서'),
       (7, '여성의류'),
       (8, '여성잡화'),
       (9, '남성패션/잡화'),
       (10, '뷰티/미용'),
       (11, '스포츠/레저'),
       (12, '취미/게임/음반'),
       (13, '중고차'),
       (14, '티켓/교환권'),
       (15, '가공식품'),
       (16, '반려동물용품'),
       (17, '식물'),
       (18, '기타 중고물품');

delimiter $$
drop procedure if exists make_product;
create procedure make_product()
begin
    declare i int default 1;
    declare stat varchar(10) default 'SALE';
    while i < 1000
        do
            if i % 3 = 1 then
                set stat = 'SALE';
            elseif i % 3 = 2 then
                set stat = 'RESERVED';
            elseif i % 3 = 0 then
                set stat = 'SOLD_OUT';
            end if;
            insert into product (product_id, title, contents, price, created_at, modified_at, views, status, deleted,
                                 category_id, location_id, user_id)
            values (i, concat('테스트제목', i), concat('테스트내용', i), floor(rand() * 1000000), now(), now(),
                    floor(rand() * 100), stat, false, floor(rand() * 18) + 1, floor(rand() * 22) + 1,
                    floor(rand() * 3) + 1);
            set i = i + 1;
        end while;
end $$
delimiter ;

delimiter $$
drop procedure if exists make_chatroom $$
create procedure make_chatroom()
begin
    declare product_idx int default 1;
    declare chatroom_idx int default 1;
    declare chatroom_cnt int default 0;
    declare chatroom_max int default floor(rand() * 30);
    while product_idx < 1000
        do
            while chatroom_cnt < chatroom_max
                do
                    insert into chatroom (chatroom_id, created_at, deleted, seller_id, buyer_id, product_id)
                    values (chatroom_idx, now(), false, floor(rand() * 3) + 1, floor(rand() * 3) + 1, product_idx);
                    set chatroom_cnt = chatroom_cnt + 1;
                    set chatroom_idx = chatroom_idx + 1;
                end while;
            set chatroom_cnt = 0;
            set chatroom_max = floor(rand() * 30);
            set product_idx = product_idx + 1;
        end while;
end $$

drop procedure if exists make_product_image $$
create procedure make_product_image()
begin
    declare product_idx int default 1;
    declare image_idx int default 1;
    declare image_cnt int default 0;
    declare image_max int default floor(rand() * 9) + 1;
    while product_idx < 1000
        do
            while image_cnt < image_max
                do
                    insert into product_image (product_image_id, image_url, product_id)
                    values (image_idx,
                            'https://second-hand-4.s3.ap-northeast-2.amazonaws.com/product-images/cute_cat.jpeg',
                            product_idx);
                    set image_idx = image_idx + 1;
                    set image_cnt = image_cnt + 1;
                end while;
            set image_cnt = 0;
            set image_max = floor(rand() * 9) + 1;
            set product_idx = product_idx + 1;
        end while;
end $$

drop procedure if exists make_watchlist $$
create procedure make_watchlist()
begin
    declare product_idx int default 1;
    declare watch_idx int default 1;
    declare watch_cnt int default 0;
    declare watch_max int default floor(rand() * 30);
    while product_idx < 1000
        do
            while watch_cnt < watch_max
                do
                    insert into watchlist (watchlist_id, product_id, user_id)
                    values (watch_idx, product_idx, floor(rand() * 3) + 1);
                    set watch_idx = watch_idx + 1;
                    set watch_cnt = watch_cnt + 1;
                end while;
            set watch_cnt = 0;
            set watch_max = floor(rand() * 30);
            set product_idx = product_idx + 1;
        end while;
end $$
delimiter ;


insert into user (user_id, avatar, username, primary_location_id, secondary_location_id)
VALUES (1, 'https://second-hand-4.s3.ap-northeast-2.amazonaws.com/user-avatars/user1.jpeg', 'test_user', 1, null),
       (2, 'https://second-hand-4.s3.ap-northeast-2.amazonaws.com/user-avatars/user2.jpeg', 'test_user2', 1, null),
       (3, null, 'test_user3', 1, null);

call make_product();

call make_product_image();

call make_chatroom();

call make_watchlist();


