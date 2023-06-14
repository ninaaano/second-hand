import { NavBarBackBtn } from './NavBarBackBtn';
import { NavBarHome } from './NavBarHome';
import { NavBarModal } from './NavBarModal';
import { NavBarModalSearch } from './NavBarModalSearch';
import { NavBarSegmentPicker } from './NavBarSegmentPicker';
import * as S from './style';

interface NavBarProps {
  type: string;
}

//TODO: layout 이름을 페어와 통일성 있게 맞추는 작업이 필요
export const NavigationBar = ({ type }: NavBarProps) => (
  <S.Layout navBarType={type as keyof typeof S.layoutType}>
    {type === 'homeLayout' && <NavBarHome />}
    {type === 'modalLayout' && (
      <NavBarModal prev={'title1'} center={'title2'} right={'title3'} />
    )}
    {type === 'modalSearchLayout' && <NavBarModalSearch />}
    {type === 'backBtnLayout' && (
      <NavBarBackBtn prev={'title1'} center={'title2'} right={'title3'} />
    )}
    {type === 'segmentPickerLayout' && <NavBarSegmentPicker title={'center'} />}
  </S.Layout>
);
