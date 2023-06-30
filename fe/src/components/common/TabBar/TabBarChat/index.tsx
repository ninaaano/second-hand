import Button from '@Components/common/Button';
import TextInput from '@Components/common/TextInput';
import { useState } from 'react';

import * as S from './style';

interface TabBarChatProps {
  formValue: string;
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
  handleChatSubmit: React.Dispatch<React.SetStateAction<string[]>>;
}

const TabBarChat = ({
  formValue,
  setFormValue,
  handleChatSubmit,
}: TabBarChatProps) => (
  <S.Box>
    <S.SendField>
      <TextInput
        value={formValue}
        setValue={setFormValue}
        handleChatSubmit={handleChatSubmit}
      />
      <Button
        buttonType="circle"
        buttonState="active"
        size="M"
        iconType="arrowUp"
        onClick={() => {
          setFormValue('');
          handleChatSubmit((prevChats) => [...prevChats, formValue]);
        }}
      />
    </S.SendField>
  </S.Box>
);

export default TabBarChat;
