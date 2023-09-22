import ChatList from '@Components/Chat/ChatList';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarHome } from '@Components/common/TabBar';
import useFetch from '@Hooks/useFetch';
import { ChatResponseData } from '@Types/index';

const Chat = () => {
  const { data: ChatData } = useFetch<ChatResponseData>({
    suspense: false,
  });

  return (
    <>
      <NavigationBar type="defaultLayout" title="채팅" />
      {!ChatData && <ChatList />}
      <TabBarHome currentPage="chat" />
    </>
  );
};
export default Chat;
