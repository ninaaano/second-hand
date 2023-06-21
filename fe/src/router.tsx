import NotFound from '@Components/common/NotFound';
import { createBrowserRouter } from 'react-router-dom';

import { Category } from '@Pages/Category';
import ChatList from '@Pages/ChatList';
import Home from '@Pages/Home';
import MyAccount from '@Pages/MyAccount';
import { NewProduct } from '@Pages/NewProduct';
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
          element: <Home />,
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
