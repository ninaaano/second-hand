import Button from '@Components/common/Button';

import * as S from './style';

const TabBarChat = () => (
  <S.Box>
    <S.SendField placeholder="내용을 입력하세요" />
    <Button buttonType="circle" buttonState="active" iconType="arrowUp" />
  </S.Box>
);

export default TabBarChat;
