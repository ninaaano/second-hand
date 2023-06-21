import { MouseEvent } from 'react';

import * as S from './style';
interface ModalProps {
  prev?: string;
  center?: string;
  right?: string;
  prevHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
  rightHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
  isRightActive?: boolean;
}
export const NavBarModal = ({
  prev,
  center,
  right,
  prevHandler,
  rightHandler,
  isRightActive,
}: ModalProps) => (
  <S.Box>
    <S.ModalText>
      <S.Button onClick={prevHandler} isActive={true}>
        {prev}
      </S.Button>
      <div>{center}</div>
      <S.Button onClick={rightHandler} isActive={isRightActive}>
        {right}
      </S.Button>
    </S.ModalText>
  </S.Box>
);
