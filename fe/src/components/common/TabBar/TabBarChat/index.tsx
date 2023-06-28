import Button from '@Components/common/Button';

import * as S from './style';

const TabBarChat = () => (
  <S.Box>
    <S.SendField>
      <S.Input placeholder="내용을 입력하세요" />
      <Button
        buttonType="circle"
        buttonState="active"
        size="M"
        iconType="arrowUp"
      />
    </S.SendField>
  </S.Box>
);

export default TabBarChat;
