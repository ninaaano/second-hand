import Button from '@Components/common/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

export const NewProductButton = () => {
  const navigate = useNavigate();

  return (
    <S.ButtonBox>
      <Button
        buttonType="circle"
        buttonState="active"
        size="L"
        iconType="plus"
        onClick={() => navigate(ROUTE_PATH.NEW_PRODUCT)}
      />
    </S.ButtonBox>
  );
};
