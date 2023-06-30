import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';

import { ChatBubbleBoxProps } from './style';
import * as S from './style';

interface ChatBubbleProps extends ChatBubbleBoxProps {
  title: string;
}

const ChatBubble = ({ type, title }: ChatBubbleProps) => (
  <S.ChatBubbleBox type="my">
    <Button
      buttonType="ellipse"
      buttonState={type === 'my' ? 'active' : 'default'}
      size="M"
      title={title}
    />
    <S.ChatBubbleTail>
      <Icon iconType={`${type}BubbleTail`} width={20} />
    </S.ChatBubbleTail>
  </S.ChatBubbleBox>
);

export default ChatBubble;
