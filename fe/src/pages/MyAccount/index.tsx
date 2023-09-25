import Logout from '@Components/MyAccount/Logout';
import { NavBarDefault } from '@Components/common/NavBar/NabBarDefault';
import { TabBarHome } from '@Components/common/TabBar';
import UserProfile from '@Components/common/UserProfile';
import { useUserInfoContext } from '@Contexts/userInfoContext';
import { LocalError } from '@Error/LocalError';
import { ERROR_MESSAGE } from '@Constants/index';

const MyAccount = () => {
  const { userInfo } = useUserInfoContext();

  if (!userInfo) {
    throw new LocalError(ERROR_MESSAGE.refresh);
  }

  return (
    <>
      <NavBarDefault title="내 계정" />
      <UserProfile avatar={userInfo.avatar} username={userInfo.username}>
        <Logout />
      </UserProfile>
      <TabBarHome currentPage="account" />
    </>
  );
};

export default MyAccount;
