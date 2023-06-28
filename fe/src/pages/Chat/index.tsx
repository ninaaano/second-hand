import ChatList from '@Components/Chat/ChatList';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { TabBarHome } from '@Components/common/TabBar';
import { useContext } from 'react';

import useFetch from '@Hooks/useFetch';

import { ChatResponseData, UserContextProps } from '@Types/index';

import { UserContext } from '../../App';

const Chat = () => {
  const { user, setUserInfo } = useContext(UserContext) as UserContextProps;

  const { data, status, errorMessage } = useFetch<ChatResponseData>();

  return (
    <>
      <NavigationBar type="defaultLayout" title="채팅" />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {!data && <ChatList />}
      <TabBarHome currentPage="chat" />
    </>
  );
};
export default Chat;
