import ChatList from '@Components/Chat/ChatList';
import { NavBarDefault } from '@Components/common/NavBar/NabBarDefault';
import { TabBarHome } from '@Components/common/TabBar';
import useFetch from '@Hooks/useFetch';
import { ChatResponseData } from '@Types/index';

const Chat = () => {
  const { data: ChatData } = useFetch<ChatResponseData>({
    suspense: false,
  });

  return (
    <>
      <NavBarDefault title="채팅" />
      {!ChatData && <ChatList />}
      <TabBarHome currentPage="chat" />
    </>
  );
};
export default Chat;
