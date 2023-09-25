import { forwardRef } from 'react';
import * as S from './style';
import { Spinner } from '../Spinner';
import { SpinnerProps } from '../Spinner/style';

export const LoadingField = forwardRef(function LoadingField(
  { isDynamic }: SpinnerProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  return (
    <S.LoadingField ref={ref}>
      <Spinner isDynamic={isDynamic} />
    </S.LoadingField>
  );
});
