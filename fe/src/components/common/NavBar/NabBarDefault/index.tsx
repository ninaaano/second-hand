import * as S from './style';
interface NavBarDefaultProps {
  title?: string;
}
export const NavBarDefault = ({ title }: NavBarDefaultProps) => (
  <S.Layout>
    <span>{title}</span>
  </S.Layout>
);
