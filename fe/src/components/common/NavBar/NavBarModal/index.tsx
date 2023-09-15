import { MouseEvent } from 'react';

import * as S from './style';
interface ModalProps {
  prev?: string;
  center?: string;
  next?: string;
  handlePrev?: (e: MouseEvent<HTMLButtonElement>) => void;
  handleNext?: (e: MouseEvent<HTMLButtonElement>) => void;
  isActivePrev?: boolean;
  isActiveNext?: boolean;
}
export const NavBarModal = ({
  prev,
  center,
  next,
  handlePrev,
  handleNext,
  isActivePrev = false,
  isActiveNext = true,
}: ModalProps) => (
  <S.Layout>
    <S.ModalText>
      <S.ButtonBox onClick={handlePrev} disabled={isActivePrev}>
        {prev}
      </S.ButtonBox>
      <div>{center}</div>
      <S.ButtonBox onClick={handleNext} disabled={isActiveNext}>
        {next}
      </S.ButtonBox>
    </S.ModalText>
  </S.Layout>
);
