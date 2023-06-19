import * as S from './style';
import { NavBarPicker } from '../NavBarPicker';
interface PickerProps {
  title: string;
}
export const NavBarSegmentPicker = ({ title }: PickerProps) => (
  <S.Layout>
    <div>{title}</div>
    <NavBarPicker leftLabel={'왼쪽'} RightLabel={'오른쪽'} />
  </S.Layout>
);
