import Button from '@Components/common/Button';

import * as S from './style';

interface ModalProps {
  stateRef: React.RefObject<HTMLDivElement>;
  titleList: string[];
  buttonTitle: string;
  onClick: () => void;
}
export const Modal = ({
  stateRef,
  titleList,
  buttonTitle,
  onClick,
}: ModalProps) => (
  <S.Layout ref={stateRef}>
    <S.ModifyBox>
      {titleList &&
        titleList.map((title, index) => (
          <div key={index} className={`product-item`}>
            {title}
          </div>
        ))}
    </S.ModifyBox>
    <Button
      buttonType="rectangle"
      buttonState="active"
      size="L"
      title={buttonTitle}
      onClick={onClick}
    />
  </S.Layout>
);
