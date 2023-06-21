import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 8px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  .saveUploadImg {
    position: sticky;
    width: 16vw;
    height: 7vh;
    border: 1px solid ${({ theme }) => theme.color.palette.gray600};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.color.colors.neutralTextStrong};
    ${({ theme }) => theme.font.fontType.subHead};
  }

  .uploadImg {
    width: 16vw;
    height: 7vh;
    border: 1px solid ${({ theme }) => theme.color.palette.gray600};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.color.colors.neutralTextStrong};
    ${({ theme }) => theme.font.fontType.subHead};
  }
`;

export const SaveImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const TextBox = styled.div`
  position: absolute;
  top: 60%;
  display: flex;
  height: 2.9vh;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 10px 10px;
  width: 100%;
  background: ${({ theme }) => theme.color.palette.gray600};
  ${({ theme }) => theme.font.fontType.caption2};
  color: ${({ theme }) => theme.color.palette.white};
`;
export const CancelImagBox = styled.div`
  position: relative;
`;

export const ButtonBox = styled.div`
  position: absolute;
  top: 0px;
  left: 45px;
`;
