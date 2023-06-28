import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 34vh;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
`;

export const ImgListBox = styled.ul`
  display: flex;
  width: 300vw;
  height: 34vh;
`;
export const ImgBox = styled.li`
  width: 100vw;
  & img {
    width: 100%;
    height: 100%;
  }
`;
