import * as S from './style';

interface ModalProps {
  prev: string;
  center: string;
  right: string;
}
export const NavBarModal = ({ prev, center, right }: ModalProps) => (
  <S.Box>
    <S.ModalText>
      <div>{prev}</div>
      <div>{center}</div>
      <div>{right}</div>
    </S.ModalText>
  </S.Box>
);
