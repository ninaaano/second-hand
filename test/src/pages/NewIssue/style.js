import styled from 'styled-components';

const $Header = styled.header`
  padding: 24px 0;

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fontSize.XXL.fontSize};
  line-height: ${({ theme }) => theme.fontSize.XXL.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export { $Header };
