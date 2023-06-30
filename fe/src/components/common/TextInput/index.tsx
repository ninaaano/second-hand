import * as S from './style';

interface TextInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleChatSubmit: React.Dispatch<React.SetStateAction<string[]>>;
}

const TextInput = ({ value, setValue, handleChatSubmit }: TextInput) => (
  <S.Input
    value={value}
    type="text"
    placeholder="내용을 입력하세요"
    onChange={(e) => {
      setValue(e.target.value);
    }}
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        setValue('');
        handleChatSubmit((prevChats) => [...prevChats, value]);
      }
    }}
  />
);

export default TextInput;
