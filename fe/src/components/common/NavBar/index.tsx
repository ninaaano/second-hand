import { MouseEvent } from 'react';

import { NavBarDefault } from './NabBarDefault';
import { NavBarBackBtn } from './NavBarBackBtn';
import { NavBarHome } from './NavBarHome';
import { NavBarModal } from './NavBarModal';
import { NavBarModalSearch } from './NavBarModalSearch';
import { NavBarSegmentPicker } from './NavBarSegmentPicker';
import * as S from './style';
interface NavBarProps {
  type: string;
  title?: string;
  center?: string;
  prev?: string;
  right?: string;
  prevHandler?: () => void;
  rightHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
  isRightActive?: boolean;
  towns?: string[];
}
//TODO: layout 이름을 페어와 통일성 있게 맞추는 작업이 필요
export const NavigationBar = ({
  type,
  title,
  center,
  prev,
  right,
  towns,
  prevHandler,
  rightHandler,
  isRightActive,
}: NavBarProps) => (
  <S.Layout navBarType={type as keyof typeof S.layoutType}>
    {type === 'defaultLayout' && <NavBarDefault title={title} />}
    {type === 'homeLayout' && <NavBarHome towns={towns} />}
    {type === 'modalLayout' && (
      <NavBarModal
        prev={prev}
        center={center}
        right={right}
        prevHandler={prevHandler}
        rightHandler={rightHandler}
        isRightActive={isRightActive}
      />
    )}
    {type === 'modalSearchLayout' && (
      <NavBarModalSearch prevHandler={prevHandler} />
    )}
    {type === 'backBtnLayout' && (
      <NavBarBackBtn
        prev={prev}
        center={center}
        right={right}
        prevHandler={prevHandler}
      />
    )}
    {type === 'segmentPickerLayout' && <NavBarSegmentPicker title={center} />}
  </S.Layout>
);
