import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarChat } from '@Components/common/TabBar';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './style';

const ChatRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBackBtnClick = () => {
    // TODO: 분기처리하기
    navigate('/chat');
  };

  return (
    <>
      <NavigationBar
        type="backBtnLayout"
        prev="뒤로"
        prevHandler={handleBackBtnClick}
        center="삼만보"
      />
      <S.Product>
        <S.ProductImg src="https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png" />
        <S.ProductBody>
          <S.ProductName>빈티지 롤러스케이트</S.ProductName>
          <S.Price>19,000원</S.Price>
        </S.ProductBody>
      </S.Product>
      <S.TopBox />
      <S.ChatBox>
        <S.OpponentChatBubble>
          <Button
            buttonType="ellipse"
            buttonState="default"
            size="M"
            title="안녕하세요 궁금한 점이 있어서 챗드려요."
          />
        </S.OpponentChatBubble>
        <S.MyChatBubble>
          <Button
            buttonType="ellipse"
            buttonState="active"
            size="M"
            title="네 안녕하세요!."
          />
        </S.MyChatBubble>
      </S.ChatBox>
      <TabBarChat />
    </>
  );
};

export default ChatRoom;