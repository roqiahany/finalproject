import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Component/Products/Products';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Brands from './Component/Brands/Brands';
import Category from './Component/Category/Category';
import Layout from './Component/Layout/Layout';
import NotFound from './Component/NotFound/NotFound';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Products />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'brands',
        element: <Brands />,
      },
      {
        path: 'category',
        element: <Category />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
// 1- create main component
// 2- download main package
// 3-Handling routing concept
