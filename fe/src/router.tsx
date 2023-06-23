import NotFound from '@Components/common/NotFound';
import { createBrowserRouter } from 'react-router-dom';

import Auth from '@Pages/Auth';
import { Category } from '@Pages/Category';
import ChatList from '@Pages/ChatList';
import Home from '@Pages/Home';
import LocationSearch from '@Pages/LocationSearch';
import LocationSetting from '@Pages/LocationSetting';
import Login from '@Pages/Login';
import MyAccount from '@Pages/MyAccount';
import { NewProduct } from '@Pages/NewProduct';
import Registration from '@Pages/Registration';
import SalesList from '@Pages/SalesList';
import WishList from '@Pages/WishList';

import App from './App';

const router = createBrowserRouter(
  [
    {
      element: <App />,
      errorElement: <NotFound errorMessage="에러" />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: '/auth',
          element: <Auth />,
        },
        {
          path: '/registration',
          element: <Registration />,
        },
        {
          path: '/locationSearch',
          element: <LocationSearch />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/locationSetting',
          element: <LocationSetting />,
        },
        {
          path: '/sales',
          element: <SalesList />,
        },
        {
          path: '/heart',
          element: <WishList />,
        },
        {
          path: '/chat',
          element: <ChatList />,
        },
        {
          path: '/account',
          element: <MyAccount />,
        },
        {
          path: '/newproudct',
          element: <NewProduct />,
        },
        {
          path: '/category',
          element: <Category />,
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);

export default router;
