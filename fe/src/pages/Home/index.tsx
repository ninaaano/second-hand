import Contents from '@Components/Home/\bContents';
import { NewProductButton } from '@Components/Home/NewProductButton';
import { NavigationBar } from '@Components/common/NavBar';
import { Spinner } from '@Components/common/Spinner';
import { TabBarHome } from '@Components/common/TabBar';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { ApiErrorBoundary } from '@Error/ApiErrorBoundary';
import { LocalError } from '@Error/LocalError';
import { Suspense } from 'react';
import { ERROR_MESSAGE } from '@Constants/index';

const Home = () => {
  const { userTownList, reverseUserLocationList } = useUserLocationContext();

  if (!userTownList.length) {
    throw new LocalError(ERROR_MESSAGE.refresh);
  }

  return (
    <>
      <NavigationBar
        type="homeLayout"
        title="title1"
        towns={userTownList}
        modalHanlder={reverseUserLocationList}
      />
      <ApiErrorBoundary>
        <Suspense fallback={<Spinner isDynamic={false} />}>
          <Contents />
        </Suspense>
      </ApiErrorBoundary>
      <NewProductButton />
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;
