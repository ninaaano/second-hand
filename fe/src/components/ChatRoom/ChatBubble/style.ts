import styled from 'styled-components';

export type ChatBubbleBoxProps = {
  type: 'my' | 'opposite';
};

export const ChatBubbleBox = styled.div<ChatBubbleBoxProps>`
  display: flex;
  position: relative;
  ${({ type }) => type === 'my' && `justify-content: flex-end`};
`;

export const ChatBubbleTail = styled.div`
  position: absolute;
  right: -6px;
  bottom: -6px;
`;
