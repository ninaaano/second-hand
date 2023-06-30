import * as S from './style';
interface PickerProps {
  leftLabel: string;
  RightLabel: string;
  isActiveSetValue: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveValue: boolean;
}

export const NavBarPicker = ({
  leftLabel,
  RightLabel,
  isActiveSetValue,
  isActiveValue,
}: PickerProps) => {
  const handleChange = () => {
    if (isActiveValue) {
      isActiveSetValue(false);
    } else {
      isActiveSetValue(true);
    }
  };
  return (
    <S.Layout>
      <S.LeftBox isLeft={isActiveValue} onClick={handleChange}>
        {leftLabel}
      </S.LeftBox>
      <S.RightBox isLeft={isActiveValue} onClick={handleChange}>
        {RightLabel}
      </S.RightBox>
    </S.Layout>
  );
};
