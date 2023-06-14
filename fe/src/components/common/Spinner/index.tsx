import * as S from './style';

export interface SpinnerProps {
  distanceY?: number;
}

export const Spinner = ({ distanceY }: SpinnerProps) => (
  <S.Spinner distanceY={distanceY} />
);
