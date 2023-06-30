import Button from '@Components/common/Button';
import NotFound from '@Components/common/NotFound';
import { Spinner } from '@Components/common/Spinner';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useInfiniteScroll from '@Hooks/useInfiniteScroll';
import usePullToRefresh from '@Hooks/usePullToRefresh';

import { Chat, ChatResponseData } from '@Types/index';

import * as S from './style';

interface ChatListProps {
  itemData?: Chat[];
}

const ChatList = ({ itemData }: ChatListProps) => {
  const navigate = useNavigate();
  const productListRef = useRef<HTMLDivElement>(null);
  const [Products, setProducts] = useState<Chat[]>([
    {
      chatId: 1,
      profileImage:
        'https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png',
      timeStamp: 4,
      user: '삼만보',
      description: '안녕하세요! 궁금한 점이 있어서 챗 드립니다',
      productImage:
        'https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png',
    },
  ]);

  const { refreshing, distance, status, errorMessage, refreshedData } =
    usePullToRefresh<ChatResponseData>(`${END_POINT.products}?page=0&size=10`);
  const { scrolledData } = useInfiniteScroll<ChatResponseData>({
    URL: END_POINT.products,
    target: productListRef,
  });

  const handleItemClick = (chatId: number) => {
    navigate(`/chatRoom/${chatId}`);
  };

  useEffect(() => {
    if (refreshedData) {
      setProducts(refreshedData?.data.chats);
    }
  }, [refreshedData]);

  useEffect(() => {
    if (scrolledData) {
      setProducts((prevProducts) => [
        ...prevProducts,
        ...scrolledData.data.chats,
      ]);
    }
  }, [scrolledData]);

  return (
    <>
      <S.TopBox />
      {refreshing && (
        <S.SpinnerBox distanceY={distance}>
          <Spinner isDynamic={true} />
        </S.SpinnerBox>
      )}
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {status !== 'error' &&
        Products.map(
          ({
            chatId,
            profileImage,
            timeStamp,
            user,
            description,
            productImage,
          }) => (
            <S.Item
              key={chatId}
              onClick={() => {
                handleItemClick(chatId);
              }}
            >
              <S.ProfileImg src={profileImage} />
              <S.Body>
                <S.Title>
                  {user}
                  <S.TimeStamp>{timeStamp}</S.TimeStamp>
                </S.Title>
                <S.Description>{description}</S.Description>
              </S.Body>
              <Button
                buttonType="circle"
                buttonState="active"
                size="S"
                title="1"
              />
              <S.ProductImg src={productImage} />
            </S.Item>
          ),
        )}
    </>
  );
};

export default ChatList;
