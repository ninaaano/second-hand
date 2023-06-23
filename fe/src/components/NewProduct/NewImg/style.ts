import styled, { css } from 'styled-components';

export const Layout = styled.div<{ disabled: boolean }>`
  display: flex;
  height: 10vh;
  gap: 8px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;

  .saveUploadImg {
    width: 7.5vw;
    height: 7vh;
    padding: 0px 17.5px;
    border: 1px solid ${({ theme }) => theme.color.colors.neutralTextStrong};
    ${({ theme }) => theme.font.fontType.subHead};
    background: ${({ theme }) => theme.color.palette.white};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.color.colors.neutralTextStrong};
    ${({ theme }) => theme.font.fontType.subHead};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      .saveUploadImg {
        pointer-events: none;
        color: ${({ theme }) => theme.color.palette.orange};
        border: 1px solid ${({ theme }) => theme.color.palette.orange};
      }
    `}

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
  top: -10px;
  left: 45px;
`;

export const ImgBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
