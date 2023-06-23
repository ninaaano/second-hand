import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { Icon } from '../../Icon';

interface NavBarHomeProps {
  towns?: string[];
}

export const NavBarHome = ({ towns }: NavBarHomeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        DropDownRef.current &&
        !DropDownRef.current.contains(target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropDownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <S.Box>
      <S.AddressBox
        ref={DropDownRef}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {towns && <span>{towns[0]}</span>}
        <Icon iconType="chevronDown" />
      </S.AddressBox>
      {isOpen && (
        <S.DropDown onClick={handleDropDownClick}>
          {towns && towns.map((town) => <S.Town key={town}>{town}</S.Town>)}
          <S.TownSetting onClick={() => navigate('/locationSetting')}>
            내 동네 설정하기
          </S.TownSetting>
        </S.DropDown>
      )}
      <S.CategoryBox>
        <Icon iconType="line" />
      </S.CategoryBox>
    </S.Box>
  );
};
