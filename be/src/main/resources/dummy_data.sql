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

insert into user (user_id, avatar, username, primary_location_id, secondary_location_id)
VALUES (1, 'https://second-hand-4.s3.ap-northeast-2.amazonaws.com/user-avatars/user1.jpeg', 'test_user', 1, null),
       (2, 'https://second-hand-4.s3.ap-northeast-2.amazonaws.com/user-avatars/user2.jpeg', 'test_user2', 1, null),
       (3, null, 'test_user3', 1, null),
       (4, 'https://avatars.githubusercontent.com/u/91525492?v=4' , 'ghkdgus29' , 1, 5);

insert into product (product_id, title, contents, price, created_at, modified_at, views, status, deleted, category_id, location_id, user_id)
values (1, '신세계 상품권 20만원(10만원권 2장) 팝니다.', '테스트내용1', 187000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (2, '갤럭시 워치4  싸게 팝니다', '테스트내용2', 50000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (3, '루이비통 알마bb 에삐 블랙', '테스트내용3', 125, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (4, '지포어 반팔티셔츠', '테스트내용4', 160000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (5, '메종마르지엘라', '테스트내용5', 290000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (6, '롯데상품권', '테스트내용6', 950000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (7, '고야드 미니앙주 블랙 풀구성이에요', '테스트내용7', 148, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (8, '애플워치se2 40mm gps 새것 급처', '테스트내용8', 200000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (9, '셀린느 미니카바스백 상태좋고 구성 다 있어요', '테스트내용9', 900000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (10, '샤넬 타올백 방탄 뷔 새상품 팝니당', '테스트내용10', 150000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (11, '데스커 모션데스크 높이조절책상, 서랍만', '테스트내용11', 300000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (12, '해외유명가수 일욜 공연 판매합미다', '테스트내용12', 77000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (13, '맥북프로 13형, M2, 2022년 팝니다.', '테스트내용13', 120, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (14, '에르메스 후루토 토트백', '테스트내용14', 110000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (15, '아이폰11 128기가', '테스트내용15', 330000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (16, '갤럭시s9+', '테스트내용16', 75000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (17, '랄프로렌 폴로 반팔 니트', '테스트내용17', 50000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (18, '이테리제 가죽벨트', '테스트내용18', 10008, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (19, '샤넬 빈티지 펜던트 목걸이 벨트 가방', '테스트내용19', 149000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (20, '알라이아 토트백', '테스트내용20', 550000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (21, '가방', '테스트내용21', 1000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (22, '할리데이비슨 아이언883 바버커스텀', '테스트내용22', 1750, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (23, '피아트 푸쉬카 핑크', '테스트내용23', 60000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (24, 'lg 퓨리케어 냉온정수기', '테스트내용24', 60000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (25, '빕스 기프티콘 5만원권', '테스트내용25', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (26, '24인치 캐리어', '테스트내용26', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (27, '데스커 양면 화이트보드', '테스트내용27', 150000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (28, '샤넬 일본골드vip연말선물가방', '테스트내용28', 150000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (29, '캘러웨이 x포지드 유틸리티 드라이빙 아이언 21도', '테스트내용29', 120000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (30, '싱고니움 바틱', '테스트내용30', 1000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (31, '삼성 갤럭시 폴드4 256GB', '테스트내용31', 880000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (32, '샤넬 트위드 자켓', '테스트내용32', 280, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (33, '제이린드버그 남성 반팔 골프티셔츠', '테스트내용33', 75000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (34, '메리다 스컬트라100 디스크 mtb대차', '테스트내용34', 750000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (35, '레이싱 시뮬레이션 세트 판매합니다', '테스트내용35', 105, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (36, '삼성 m5 스마트 모니터 27인치 화이트!', '테스트내용36', 200000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (37, ':star:️이사 정리:star:️ 월넛 색상 원목 전신거울', '테스트내용37', 15000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (38, '철재서랍장', '테스트내용38', 10000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (39, '아이폰 12프로 부품용 128GB', '테스트내용39', 380000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (40, '에어팟 프로2 팝니다', '테스트내용40', 210000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (41, '서랍장', '테스트내용41', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (42, '수납형 계단침대 SS', '테스트내용42', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (43, '2023년 스카티카메론 뉴포트2 34인치', '테스트내용43', 510000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (44, '갤레시 워치 5 실버 새거', '테스트내용44', 170000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (45, '촬영조명', '테스트내용45', 10000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (46, '나이키 드라이핏 중량밴드 손목(0.9Kg) 발목(2.2Kg) 세트 모래주머니', '테스트내용46', 10000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (47, '당근구매안경 재판매', '테스트내용47', 50000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (48, '클래식박스 가죽가방 크로스백', '테스트내용48', 70000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (49, '롯데 패밀리 콘서트 18일 A석 2매', '테스트내용49', 100000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (50, '마켓비 접이식 소파 침대', '테스트내용50', 10000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (51, '꼼데가르송 남자 반팔 L', '테스트내용51', 60000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (52, '주방다이', '테스트내용52', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (53, '루이비통 디스커버리 이클립스 범백 힙색 슬린백', '테스트내용53', 170, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (54, '2*5 선반 판매합니다.', '테스트내용54', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (55, '락피쉬 헤이든 레인부츠 크림 240', '테스트내용55', 69000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (56, '사우스케이프 여성티셔츠', '테스트내용56', 140000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (57, '삼성 스마트티비', '테스트내용57', 150000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (58, '티파니앤코 스마일 목걸이', '테스트내용58', 300000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (59, '이사때문에 거의 사용안한 전자레인지 내놓습니다.', '테스트내용59', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (60, '사우스케이프 정품 팬츠', '테스트내용60', 180000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (61, '디올 블랙 미니 오블리크 북토트백', '테스트내용61', 750000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (62, '위니아 건조기 10kg 2022', '테스트내용62', 290000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (63, '샤넬애나멜 스티치토드백', '테스트내용63', 800000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (64, '아우디 콰트로 골프백', '테스트내용64', 180000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (65, 'LG 10kg통돌이 세탁기', '테스트내용65', 50000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (66, 'e스마트 홈바 사이드테이블 철제 바테이블 화이트 1800', '테스트내용66', 39000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (67, '헌터 장화 (새상품)', '테스트내용67', 120000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (68, '금전운을 몰고 오는 돈나무 펠리아페페', '테스트내용68', 10000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (69, 'Z플립3 256g 크림', '테스트내용69', 170000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (70, '토즈 드라이빙 슈즈', '테스트내용70', 130000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (71, '미드센츄리 미니식탁의자 미니스툴 미니화장대의자', '테스트내용71', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (72, '러그 카페트 사계절 (네이비)', '테스트내용72', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (73, '이태리 엔틱 스탠드 조명', '테스트내용73', 650000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (74, '100 헤지스 골프 반팔티/카라티/피케티', '테스트내용74', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (75, '갤럭시 A21s', '테스트내용75', 80000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (76, '끌로에 스니커즈', '테스트내용76', 350000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (77, '비비랩 콜라겐', '테스트내용77', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (78, '바네사브루노 스팽클 장식 리넨 카바스백', '테스트내용78', 175000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (79, '미우라 경량 스탠드백', '테스트내용79', 420000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (80, 'M2 맥북프로 14인치 512기가 스페이스그레이 (SS급)', '테스트내용80', 205, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (81, '입생로랑립스틱', '테스트내용81', 36000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (82, '사무용품 쇼파.다이.행거 등등', '테스트내용82', 100000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (83, '오르 orr 532 슬림 스탠다드 데님 청바지', '테스트내용83', 50000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (84, '타임 실크 블라우스', '테스트내용84', 68000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (85, '타임옴므 시어서커 반팔티 105', '테스트내용85', 115000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (86, '스파이더 34인치', '테스트내용86', 80000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (87, '아디다스 가젤 그레이', '테스트내용87', 90000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (88, '핑 G425 MAX 드라이버 9도 S강도 팝니다', '테스트내용88', 450000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (89, '주말 급처 정품) 루이비통 포쉐트 NM 악세수아 숄더백.키링', '테스트내용89', 480000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (90, '(거의새것) 골프웨어set (size：55)', '테스트내용90', 150000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (91, '(새상품 풀구성)구찌 신상 스퀘어 선글라스', '테스트내용91', 200000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (92, 's23플러스 512  크림 자급제', '테스트내용92', 105, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (93, '데스커 모션데스크 높이조절책상', '테스트내용93', 300000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (94, '딥티크 탐다오 판매합니다', '테스트내용94', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (95, 'Theory 띠어리 니트 티셔츠', '테스트내용95', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (96, '정품 오프 슬리퍼 225-230', '테스트내용96', 30000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (97, '샤넬 핑크 트위드 자켓', '테스트내용97', 250, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (98, '버버리 핑크체크 셔츠', '테스트내용98', 20000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SOLD_OUT', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (99, '주말 급처 정품) 루이비통 미니 다미에 포쉐트. 악세수아 크로스백', '테스트내용99', 480000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'RESERVED', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1),
       (100, '헌터 여성용 오리지날 레인부츠', '테스트내용100', 150000, '2023-06-16T09:52:33', '2023-06-16T09:52:33', floor(rand() * 100), 'SALE', false, floor(rand() * 18) + 1, floor(rand() * 22) + 1, floor(rand() * 3) + 1);


delimiter $$
drop procedure if exists make_chatroom $$
create procedure make_chatroom()
begin
    declare product_idx int default 1;
    declare chatroom_idx int default 1;
    declare chatroom_cnt int default 0;
    declare chatroom_max int default floor(rand() * 30);
    while product_idx <= 100
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

insert into product_image (product_image_id, image_url, product_id)
values (1, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/0045516292d8cd1d3c49710af4562cd68a5c3d4afaccc9d3d37a2cd521911fb7.webp?q=82&s=300x300&t=crop&f=webp', 1),
       (2, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/94df8f8d1dd1c0b877b20a1ef4fb767d7a5aa9592658c71fba4d7b8babbcc503.webp?q=82&s=300x300&t=crop&f=webp', 2),
       (3, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/9830e6c317f7e3c04fd818bf4155e9879d3c4674c0016e31131572c21320d33d_0.webp?q=82&s=300x300&t=crop&f=webp', 3),
       (4, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/770caa3c7743983c3b4cf7f10718bc52625681b9f37fb864961984ecc9d63d94_0.webp?q=82&s=300x300&t=crop&f=webp', 4),
       (5, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/4173208b06917ddb42a643d364d68acc20d4e8174bc744d788f33fc9294904dc.jpg?q=82&s=300x300&t=crop&f=webp', 5),
       (6, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/6addbff615f091431a744aa315b580c4c0de9a72098acb17f2a4194c262a8341.jpg?q=82&s=300x300&t=crop&f=webp', 6),
       (7, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/adc53dd652051e4f9f209f056f8111869756af1322d9be2c1351ef813d16e112_0.webp?q=82&s=300x300&t=crop&f=webp', 7),
       (8, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/097b102f37825a368bdd665cf422202927b89a9db8bb5c4387ee7aa29c5fb874.jpg?q=82&s=300x300&t=crop&f=webp', 8),
       (9, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/a67622bf861e65e2e79bc9896606636bcb27193c74f7a6c2024447127e8e2120_0.webp?q=82&s=300x300&t=crop&f=webp', 9),
       (10, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/1792e1fe1fe563318dd839dfd65403adb177c97a496d46bcf4bc5c29f6bf62fe.jpg?q=82&s=300x300&t=crop&f=webp', 10),
       (11, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/a2b24d5a7dfe6ac156fd0357d379f48b01a7f5894a8558f54df2a55afc90dab2.jpg?q=82&s=300x300&t=crop&f=webp', 11),
       (12, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/50e06eec446e54d1abf78e84d2c24a3349061171e6f0299524783151205c713d.jpg?q=82&s=300x300&t=crop&f=webp', 12),
       (13, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/bf648ac476f83712b41630564e5a65a4b23164c8d3cd481b9ac4ff5d294a9753.jpg?q=82&s=300x300&t=crop&f=webp', 13),
       (14, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f9377f01086ae7272cf368e463120a5773eb9c4578a0aaf7e22e5e303bf14bda_0.webp?q=82&s=300x300&t=crop&f=webp', 14),
       (15, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3E0C7B0028DAD34D7FA5D22AE42B1B30BC28F4DB9D8BF72CF96A4AB0792B4224.jpg?q=82&s=300x300&t=crop&f=webp', 15),
       (16, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/2a504dc113bf59c47ade58af1bd6a99525dd56005d1b25d8ba48f10212c1105d_0.webp?q=82&s=300x300&t=crop&f=webp', 16),
       (17, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/b32d7be8c6080f71770794acc71e1393d8a0e3a473f2a79782b44c0344bc341e.jpg?q=82&s=300x300&t=crop&f=webp', 17),
       (18, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/dbbfb3a787e98b30f20928c7f3fe61de00a82093123ec9cdc9e6d3aa11ae5a49.webp?q=82&s=300x300&t=crop&f=webp', 18),
       (19, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/4800c55830d6d8a7e2b6226c9ccfd41760aea5d24de02b006fa684c96e515ff8.jpg?q=82&s=300x300&t=crop&f=webp', 19),
       (20, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/a48893549b3c440ebfa47878f1c616dfb418c24420653e9fd98293645f106640_0.webp?q=82&s=300x300&t=crop&f=webp', 20),
       (21, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/d354fc78ae11a6d28ca069ff969fabaadd7642160a5f4503d1d73376386e6437_0.webp?q=82&s=300x300&t=crop&f=webp', 21),
       (22, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/bbef6552931853cbf491901b90ba86a439058d861bd10607558d11f76d283e41.jpg?q=82&s=300x300&t=crop&f=webp', 22),
       (23, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3745fc32ea664ad564843269e08e9722377574b8435c9280afbb68a0630d41ea.jpg?q=82&s=300x300&t=crop&f=webp', 23),
       (24, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/e37049f0f2bc70b3dd4485dcf3b848d3fab46f78734b91ed9b12b471abad417e_0.webp?q=82&s=300x300&t=crop&f=webp', 24),
       (25, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/26e6da8d0b454be9b3d6f38c38813d94f63c0a64ad775ad495f421e0a687269b.jpg?q=82&s=300x300&t=crop&f=webp', 25),
       (26, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/07df5c6b9851ed9346ec4c18cf15f69a14b1d3cd144d39e9c08e78c6e061f60a_0.webp?q=82&s=300x300&t=crop&f=webp', 26),
       (27, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/c6b11522940be1a6a3f7e079db4ea4c4b6903ad1a13f181fafa67fff12b6fca5.jpg?q=82&s=300x300&t=crop&f=webp', 27),
       (28, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/456b88707a4909c1a1c6df97690f8ea896c5b4ebc14ab70c5c7b1d15c9930d49_0.webp?q=82&s=300x300&t=crop&f=webp', 28),
       (29, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/176c12460e4e7a96c728f974e633cb26812d2845a6af6a0c321c8cad5ee2e235.jpg?q=82&s=300x300&t=crop&f=webp', 29),
       (30, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/c0312b4a9df0b4d31f3bcd3c3ceb6f2d975bfee7b178f9519b0b2e749b3d8801_0.webp?q=82&s=300x300&t=crop&f=webp', 30),
       (31, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/4bbe77c68080d6df6b0af37c832417a37666b3841cde9f77aebcbc8fae44e18b_0.webp?q=82&s=300x300&t=crop&f=webp', 31),
       (32, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/24071d0cececc44b2d7933f01e2182f8b88bbdd826522e7c967e7579c9a960b0.jpg?q=82&s=300x300&t=crop&f=webp', 32),
       (33, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/2caed5a0b1e040e5547679374cced4408ec38709721e5554147926722527dc5b_0.webp?q=82&s=300x300&t=crop&f=webp', 33),
       (34, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/614193551e7949405edf38bfa381b42539828a5838d72ec89b20c4f8005d9190_0.webp?q=82&s=300x300&t=crop&f=webp', 34),
       (35, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/70d56b240682d9b3fc4f12f6cf734868b3354d0d0a5bda6219376dcdcff6ea65.jpg?q=82&s=300x300&t=crop&f=webp', 35),
       (36, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/88ba732498d9a9427cd1a1686dd4354ae19a56a899736c54cb1883d7d5c0d73b.jpg?q=82&s=300x300&t=crop&f=webp', 36),
       (37, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/BF14FD15ACE46F0A0C46379049A65EB9C941EAE7350C194AC61EF065E194A1B3.jpg?q=82&s=300x300&t=crop&f=webp', 37),
       (38, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/6c7c75ca527ccd3a5903bddbdcc3e06a5cccda34d795458dca8413e67c7aafe2.jpg?q=82&s=300x300&t=crop&f=webp', 38),
       (39, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/7d0d7fc2a7f4a32db0a6525210cf8233ba925ce9c0ebce76c95136f9d49442da_0.webp?q=82&s=300x300&t=crop&f=webp', 39),
       (40, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/545564deea62f54c09babecd3b37dbedcc7a963b1e76c5cf5e112cd7cfd7a57e.jpg?q=82&s=300x300&t=crop&f=webp', 40),
       (41, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3919d56ca0b78a7711170b0b2c7b76201b90d189cdea98e6b6ea34c581f05e19.jpg?q=82&s=300x300&t=crop&f=webp', 41),
       (42, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/25e0088bea65a77a8062f2238c56eddb7ea4ca08501091a83a5621b0244c8975_0.webp?q=82&s=300x300&t=crop&f=webp', 42),
       (43, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/dbd53c8f9b4aaf9c8e1060bcdad5888d3a9501f8b2317171cf2fa254e7d126be.jpg?q=82&s=300x300&t=crop&f=webp', 43),
       (44, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/96578f3e04f0309fb59f34ab0f5e43426ce512d7a9a0a2bc3a0d75bd0906ac0b_0.webp?q=82&s=300x300&t=crop&f=webp', 44),
       (45, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/9ba7a24da2832e01af18b78388f2b47407da10d80e3e2d609b88ad7e77eaf0d3_0.webp?q=82&s=300x300&t=crop&f=webp', 45),
       (46, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/e68355451cca1877bd8318e0a2528f0347f52b572720a34ea940a81df44e00dd.jpg?q=82&s=300x300&t=crop&f=webp', 46),
       (47, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f5636dd8e5608760b8d9eb7a2a55381e46c1d706fdccbbc98c8b91278e932955_0.webp?q=82&s=300x300&t=crop&f=webp', 47),
       (48, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/762f069c2fc4f4281d5caf3f1c72d1207a4cd76a71cbb4718edb604f3c0ce133.jpg?q=82&s=300x300&t=crop&f=webp', 48),
       (49, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/b9aac87989c10dab049db45addab7d734f63671196b557fb6f8789899b57a595.jpg?q=82&s=300x300&t=crop&f=webp', 49),
       (50, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/712dfa0a3588816d7ab7d227a1e5ea5ea850ab8a8c3cf6e53e0c8a28bef424e0_0.webp?q=82&s=300x300&t=crop&f=webp', 50),
       (51, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/5764FEB97D7A1E083159188ABA56BD3F485998C0CE1475A278960392DB841E3B.jpg?q=82&s=300x300&t=crop&f=webp', 51),
       (52, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/59c6efb4f13bace8bb0d318b1bdfa63d3de41a19434a2074978662d996aba1ba.jpg?q=82&s=300x300&t=crop&f=webp', 52),
       (53, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f1b7d3f46c16c4f27b7d2db41ad845e7f582e5a7a252d4f0af609ab67e088315.jpg?q=82&s=300x300&t=crop&f=webp', 53),
       (54, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f1c902dc40484b548c111233902411b7c087b6f22a5521e0a1fbfd799475b436_0.webp?q=82&s=300x300&t=crop&f=webp', 54),
       (55, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/31c001ac0a26cc0f44a29a4f34f4cc06d1296209505e27dc469d4fecc09f70c5.jpg?q=82&s=300x300&t=crop&f=webp', 55),
       (56, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/24362e74404fb4b3064251223051c170e669888866e7a38f85cdf2af550d2687_0.webp?q=82&s=300x300&t=crop&f=webp', 56),
       (57, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/95f57e55f55507f9f7e0adabdc66588f9fb86ea151d0881a79ffa63eeb1f7086_0.webp?q=82&s=300x300&t=crop&f=webp', 57),
       (58, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/ebf600c90fdc1b6d9933a239ffe40d2915c9be5f1455b2d0704c10fd2143d11b.jpg?q=82&s=300x300&t=crop&f=webp', 58),
       (59, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3f736f070d4ae369e6c9b6d01a2a9e1b9304f7a2c78b6b3ee5ad9dc43fc5fd8a.webp?q=82&s=300x300&t=crop&f=webp', 59),
       (60, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/ce7a4f18fd1ad71b65d588037a34a7005905c5016407fb186d54d3806d8a5073_0.webp?q=82&s=300x300&t=crop&f=webp', 60),
       (61, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/40b1c0f5e604239f3a627e4b41b03e4a3c7fcfaf6cb630ad04040297a0eb7f50.jpg?q=82&s=300x300&t=crop&f=webp', 61),
       (62, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/6bed6ed90133acbacc191db3de841a2fc0fb70eac150d33844cbdb348adeab09_0.webp?q=82&s=300x300&t=crop&f=webp', 62),
       (63, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/e3fd145bdc5a58938cbad7ef132013749af6272923ffff5ce7c7fc41be1a7c70_0.webp?q=82&s=300x300&t=crop&f=webp', 63),
       (64, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/7ac44a2f42bcd1cdb7c96442a93d3a54e0c0d1f18a9ab73b8fec365a89fc041b_0.webp?q=82&s=300x300&t=crop&f=webp', 64),
       (65, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/39d7bd8f45cebbbb0e734c6f54ce86184533a91d2dc27e16fb470a873401afea_0.webp?q=82&s=300x300&t=crop&f=webp', 65),
       (66, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/6108e00b01532cec7e576838f7b5f111b76b56f502bbbee371bc20ea835628b4_0.webp?q=82&s=300x300&t=crop&f=webp', 66),
       (67, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/1646e52cc0b6e9c559c48b2c68991d7122bdd35d818d6460a0280d6ef374ad36.jpg?q=82&s=300x300&t=crop&f=webp', 67),
       (68, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/e13933253d96ca9ef5894e393b9abcd610953138ada847cecd42bdd9931fb703_0.webp?q=82&s=300x300&t=crop&f=webp', 68),
       (69, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3623021a0235f9c01d77b469f4bf04fccfe3ec143732c78c091e0d577b9ad41c.jpg?q=82&s=300x300&t=crop&f=webp', 69),
       (70, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/F7A7789A4FCC434C4E38765B1556E496A27C754CB7B727D97C38539F846A1E04.jpg?q=82&s=300x300&t=crop&f=webp', 70),
       (71, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/5eea4ad796ab840df6e97b66ca517c0f47334f8e87e2e8e5d849158b18100abe.jpg?q=82&s=300x300&t=crop&f=webp', 71),
       (72, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/b088a4d0229ec6ab08f9598d2510ee613f8c57d11a51594f34ce58c2fce0f4dc.jpg?q=82&s=300x300&t=crop&f=webp', 72),
       (73, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/c1a4ff1286b1fefd363bf550676ddb5ff8535f0eb84767b800db73aedc62e61b_0.webp?q=82&s=300x300&t=crop&f=webp', 73),
       (74, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/a815315328cf42bf16fffb94c6f04e503ffa0a00e0372494a4058bf33d521424_0.webp?q=82&s=300x300&t=crop&f=webp', 74),
       (75, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f8cbe44d69a47ee6e78b09f17f616e6b2e5b9530470ea10e78b0a43abdb5508d.jpg?q=82&s=300x300&t=crop&f=webp', 75),
       (76, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/70a94bd04e96f9bad325edebac45dc1661fe2cae70333379117ca31757da08e2.jpg?q=82&s=300x300&t=crop&f=webp', 76),
       (77, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/fc6582158407fbbbec600389f7d4e3e42006f29f2a510ad0da52850af518f15b.jpg?q=82&s=300x300&t=crop&f=webp', 77),
       (78, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/63037c7f1ba71650267f9dd64bf12e28ae75fad90d240840c5215c9989325a7b.jpg?q=82&s=300x300&t=crop&f=webp', 78),
       (79, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/a20598538fda270a1e75a63e4c5f10be5e003e61c3d3a380d784dfb2e6f6adaf.jpg?q=82&s=300x300&t=crop&f=webp', 79),
       (80, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/808f1f1d50124a22cd130895e11bbdd08bd41573dc426f91f6dc398f45c771e6.jpg?q=82&s=300x300&t=crop&f=webp', 80),
       (81, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f60df894d9c2c9da169642981c4aeb17f9a1b0ecd62cb229a4466134e19d9485.jpg?q=82&s=300x300&t=crop&f=webp', 81),
       (82, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/a032f56fb1e6c3032400eb995f3bcf1c0964c0e53791f7c189ca549df836008d_0.webp?q=82&s=300x300&t=crop&f=webp', 82),
       (83, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/47e0a6d1561d0f662a42de5fbb88cb025c1c15d2018ffd8ea02b5083d245dbce.jpg?q=82&s=300x300&t=crop&f=webp', 83),
       (84, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/ffcce21065221287f3aab846cb0022719c3d9e5e4878cc43b352b3cdc3d6ca49_0.webp?q=82&s=300x300&t=crop&f=webp', 84),
       (85, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/f0d05bd0444682dfa9940913ecdbc58374944034e3b9747cd1336d5b14d57dd3_0.webp?q=82&s=300x300&t=crop&f=webp', 85),
       (86, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/5c3031cf6146aa48581e7e2d6751cb3326b8084f2b223874d1bfd6c0591087dc_0.webp?q=82&s=300x300&t=crop&f=webp', 86),
       (87, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/58dedd7bd152d85c519eb7173a0bef1cd61dace0d1ef807a18ae9f1db9b87d94.jpg?q=82&s=300x300&t=crop&f=webp', 87),
       (88, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/b04b338a2660e2b594a12bacd9215d88f284ce9baa7336f488e4aa7a1fb00aee_0.webp?q=82&s=300x300&t=crop&f=webp', 88),
       (89, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3d5805569e6d736c78de9c166132ab44fa015c0a2142cb7f297b9babde9e5499.jpg?q=82&s=300x300&t=crop&f=webp', 89),
       (90, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/6d8a80f94965f0521e77dd1a2eb2da2304b3f21c9146ae27b9f22166e112f39a.jpg?q=82&s=300x300&t=crop&f=webp', 90),
       (91, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/235d2aabab04b38c1cdeb76917f5c84337b4a085c339feb461601307d91ef82b.jpg?q=82&s=300x300&t=crop&f=webp', 91),
       (92, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/aeb4b109d115069a9eef09d80f91709e9dc27cec79bdaa03491b8bfcde5405b1_0.webp?q=82&s=300x300&t=crop&f=webp', 92),
       (93, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/ecc394eab9fb788021133bb01afe6aab6911cba839b91e6979f4efd9886cd3c4.jpg?q=82&s=300x300&t=crop&f=webp', 93),
       (94, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/9664b3231afba903a6e84cc13350e5af86a31ae2b56c06ad2823b9fec70c052d.jpg?q=82&s=300x300&t=crop&f=webp', 94),
       (95, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/3712d04c7507170d95448c372a0ffe649d4d4398e5edae6f9994d8831e83494e.jpg?q=82&s=300x300&t=crop&f=webp', 95),
       (96, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/7258d3bd3d4a8a22a579b742bb24d9abacbd3ac3828ad2a55e50c496c1467df3.jpg?q=82&s=300x300&t=crop&f=webp', 96),
       (97, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/de45187ced4d6d9e0ac53372fd64950f7ea110dd2991a9a9cecd098883a748ce.jpg?q=82&s=300x300&t=crop&f=webp', 97),
       (98, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/b426da380ab0798ddd9c2089cc808daa3d8fc44a789d7c115c95705e1ef0396a.jpg?q=82&s=300x300&t=crop&f=webp', 98),
       (99, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/976824419a78b0b7926c29fc8ac412ca3e354e4d2b4f927f1af2e3ce80a87b8b.jpg?q=82&s=300x300&t=crop&f=webp', 99),
       (100, 'https://dnvefa72aowie.cloudfront.net/origin/article/202306/8cd732fdc3d7d2f526aac8d327215c5056b261c99a419472d982d05832e859f9.jpg?q=82&s=300x300&t=crop&f=webp', 100);


drop procedure if exists make_watchlist $$
create procedure make_watchlist()
begin
    declare product_idx int default 1;
    declare watch_idx int default 1;
    declare watch_cnt int default 0;
    declare watch_max int default floor(rand() * 30);
    while product_idx <= 100
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

call make_chatroom();

call make_watchlist();


