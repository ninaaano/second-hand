import ChatList from '@Components/Chat/ChatList';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { TabBarHome } from '@Components/common/TabBar';
import { API_STATUS } from '@Constants/index';

import useFetch from '@Hooks/useFetch';

import { ChatResponseData } from '@Types/index';

const Chat = () => {
  const { data, status, errorMessage } = useFetch<ChatResponseData>();

  return (
    <>
      <NavigationBar type="defaultLayout" title="채팅" />
      {status === API_STATUS.ERROR && <NotFound errorMessage={errorMessage} />}
      {!data && <ChatList />}
      <TabBarHome currentPage="chat" />
    </>
  );
};
export default Chat;
