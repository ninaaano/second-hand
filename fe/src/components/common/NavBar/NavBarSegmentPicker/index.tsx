import * as S from './style';
import { NavBarPicker } from '../NavBarPicker';
interface PickerProps {
  title?: string;
  isActiveSetValue: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveValue: boolean;
}
export const NavBarSegmentPicker = ({
  title,
  isActiveSetValue,
  isActiveValue,
}: PickerProps) => (
  <S.Layout>
    <div>{title}</div>
    <NavBarPicker
      leftLabel="판매중"
      RightLabel="판매완료"
      isActiveSetValue={isActiveSetValue}
      isActiveValue={isActiveValue}
    />
  </S.Layout>
);
