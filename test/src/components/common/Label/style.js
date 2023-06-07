import styled from 'styled-components';

const $Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  width: max-content;
  height: ${({ height }) => `${height}px`};
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => {
    return textColor === 'dark' ? '#14142B' : '#FEFEFE';
  }};
  gap: 4px;
  // TODO : 글씨체 바꿔보고 삭제 요망
  letter-spacing: 0.5px;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
`;

export { $Label };
