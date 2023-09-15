import ChatList from '@Components/Chat/ChatList';
import { NavBarDefault } from '@Components/common/NavBar/NabBarDefault';
import NotFound from '@Components/common/NotFound';
import { TabBarHome } from '@Components/common/TabBar';

import useFetch from '@Hooks/useFetch';

import { ChatResponseData } from '@Types/index';

const Chat = () => {
  const { data, status, errorMessage } = useFetch<ChatResponseData>();

  return (
    <>
      <NavBarDefault title="채팅" />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {!data && <ChatList />}
      <TabBarHome currentPage="chat" />
    </>
  );
};
export default Chat;
