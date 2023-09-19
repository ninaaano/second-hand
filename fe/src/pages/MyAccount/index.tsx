import UserInfo from '@Components/MyAccount/UserInfo';
import { NavigationBar } from '@Components/common/NavBar';
import { TabBarHome } from '@Components/common/TabBar';

const MyAccount = () => (
  <>
    <NavigationBar type="defaultLayout" title="내 계정" />
    <UserInfo />
    <TabBarHome currentPage="account" />
  </>
);

export default MyAccount;
