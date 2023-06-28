import styled from 'styled-components';

interface SpinnerBoxProps {
  distanceY: number;
}

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  height: 8vh;
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.color.palette.gray500};
  padding: 10px 0;
`;

export const SpinnerBox = styled.div.attrs<SpinnerBoxProps>((props) => ({
  style: {
    transform: `translateY(${props.distanceY}px)`,
  },
}))<SpinnerBoxProps>`
  position: absolute;
  left: 45%;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.palette.white};
`;

export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;

export const Body = styled.div`
  flex-flow: 1;
  height: 6vh;
`;

export const Title = styled.span`
  ${({ theme }) => theme.font.fontType.callOut};
`;

export const TimeStamp = styled.span`
  color: ${({ theme }) => theme.color.colors.systemBackgroundWeak};
  ${({ theme }) => theme.font.fontType.footNote};
`;

export const ButtonBox = styled.div``;

export const Description = styled.div`
  ${({ theme }) => theme.font.fontType.footNote};
`;

export const ProductImg = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  border-radius: 8px;
`;

export const TopBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const BottomBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;
