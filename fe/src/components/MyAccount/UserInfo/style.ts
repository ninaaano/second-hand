import styled from 'styled-components';

export const InfoBox = styled.div`
  height: 90vh;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 40%;
`;

export const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const NoticeBox = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserId = styled.div`
  padding-left: 5px;
  ${({ theme }) => theme.font.fontType.headLine};
  color: ${({ theme }) => theme.color.colors.neutralTextStrong};
`;

export const AddLocationButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 30vh;
  width: 100vw;
`;
