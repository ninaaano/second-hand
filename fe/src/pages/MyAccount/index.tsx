import Logout from '@Components/MyAccount/Logout';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarHome } from '@Components/common/TabBar';
import UserProfile from '@Components/common/UserProfile';
import { useUserInfoContext } from '@Contexts/userInfoContext';

const MyAccount = () => {
  const { userInfo } = useUserInfoContext();

  return (
    <>
      <NavigationBar type="defaultLayout" title="내 계정" />
      <UserProfile avatar={userInfo.avatar} username={userInfo.username}>
        <Logout />
      </UserProfile>
      <TabBarHome currentPage="account" />
    </>
  );
};

export default MyAccount;
