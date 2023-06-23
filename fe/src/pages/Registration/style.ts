import styled from 'styled-components';

export const InfoBox = styled.div`
  height: 55vh;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 70%;
`;

export const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const NoticeBox = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Notice = styled.div`
  padding-left: 10px;
  ${({ theme }) => theme.font.fontType.footNote};
`;

export const UserId = styled.div`
  padding-left: 5px;
  ${({ theme }) => theme.font.fontType.title2};
  color: ${({ theme }) => theme.color.colors.neutralTextStrong};
`;

export const AddLocationButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
