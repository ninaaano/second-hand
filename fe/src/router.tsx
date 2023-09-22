import { AuthProvider } from '@Contexts/authContext';
import { HomeProductsProvider } from '@Contexts/homeProductContext';
import { UserInfoProvider } from '@Contexts/userInfoContext';
import { UserLocationProvider } from '@Contexts/userLocationContext';
import { GlobalErrorBoundary } from '@Error/GlobalErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import Auth from '@Pages/Auth';
import { Category } from '@Pages/Category';
import Chat from '@Pages/Chat';
import ChatRoom from '@Pages/ChatRoom';
import Favorites from '@Pages/Favorites';
import Home from '@Pages/Home';
import LocationSearch from '@Pages/LocationSearch';
import LocationSetting from '@Pages/LocationSetting';
import Login from '@Pages/Login';
import MyAccount from '@Pages/MyAccount';
import { NewProduct } from '@Pages/NewProduct';
import { ProductDetail } from '@Pages/ProductDetail';
import Registration from '@Pages/Registration';
import SalesList from '@Pages/SalesList';
import { persistentStorage } from './App';

const Routers = () => (
  <BrowserRouter>
    <GlobalErrorBoundary>
      <AuthProvider storage={persistentStorage}>
        <UserInfoProvider>
          <UserLocationProvider>
            <HomeProductsProvider>
              <Routes>
                <Route path={ROUTE_PATH.ROOT} element={<Login />} />
                <Route path={ROUTE_PATH.AUTH} element={<Auth />} />
                <Route
                  path={ROUTE_PATH.REGISTRATION}
                  element={<Registration />}
                />
                <Route
                  path={ROUTE_PATH.LOCATION_SEARCH}
                  element={<LocationSearch />}
                />
                <Route path={ROUTE_PATH.HOME} element={<Home />} />
                <Route
                  path={ROUTE_PATH.LOCATION_SETTING}
                  element={<LocationSetting />}
                />
                <Route path={ROUTE_PATH.SALES} element={<SalesList />} />
                <Route path={ROUTE_PATH.HEART} element={<Favorites />} />
                <Route path={ROUTE_PATH.CHAT} element={<Chat />} />
                <Route
                  path={`${ROUTE_PATH.CHAT_ROOM}/:id`}
                  element={<ChatRoom />}
                />
                <Route path={ROUTE_PATH.ACCOUNT} element={<MyAccount />} />
                <Route path={ROUTE_PATH.NEW_PRODUCT} element={<NewProduct />} />
                <Route path={ROUTE_PATH.CATEGORY} element={<Category />} />
                <Route
                  path={`${ROUTE_PATH.PRODUCT_DETAIL}/:id`}
                  element={<ProductDetail />}
                />
                <Route path={ROUTE_PATH.ERROR} element={<Login />} />
              </Routes>
            </HomeProductsProvider>
          </UserLocationProvider>
        </UserInfoProvider>
      </AuthProvider>
    </GlobalErrorBoundary>
  </BrowserRouter>
);

export default Routers;
