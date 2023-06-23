import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0.8em 0.2em;
`;

export const AddressBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const CategoryBox = styled.div`
  display: flex;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 8vh;
  border: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.colors.neutralBackground};
  z-index: 1;
`;

export const Town = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 45vw;
  padding: 0.7vh 0 0.7vh 5vw;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.colors.neutralBackgroundBold};
  ${({ theme }) => theme.font.fontType.headLine};
`;

export const TownSetting = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 45vw;
  padding: 0.7vh 0 0.7vh 5vw;
  ${({ theme }) => theme.font.fontType.body}
`;
