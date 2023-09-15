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
      <S.PickerBox isLeft={isActiveValue} onClick={handleChange}>
        {leftLabel}
      </S.PickerBox>
      <S.PickerBox isLeft={isActiveValue} onClick={handleChange}>
        {RightLabel}
      </S.PickerBox>
    </S.Layout>
  );
};
