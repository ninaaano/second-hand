import Contents from '@Components/Home/\bContents';
import { NewProductButton } from '@Components/Home/NewProductButton';
import { NavigationBar } from '@Components/common/NavBar';
import { Spinner } from '@Components/common/Spinner';
import { TabBarHome } from '@Components/common/TabBar';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { Suspense } from 'react';

const Home = () => {
  const { userTownList, reverseUserLocationList } = useUserLocationContext();
  return (
    <>
      <NavigationBar
        type="homeLayout"
        title="title1"
        towns={userTownList}
        modalHanlder={reverseUserLocationList}
      />
      <Suspense fallback={<Spinner isDynamic={false} />}>
        <Contents />
      </Suspense>
      <NewProductButton />
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
