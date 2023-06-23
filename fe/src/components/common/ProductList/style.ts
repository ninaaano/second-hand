import styled from 'styled-components';

interface SpinnerBoxProps {
  distanceY: number;
}

export const Layout = styled.div`
  & hr {
    width: 95vw;
    background: ${({ theme }) => theme.color.palette.gray500};
    height: 1px;
    border: 0;
  }
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

export const TopBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const BottomBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;
