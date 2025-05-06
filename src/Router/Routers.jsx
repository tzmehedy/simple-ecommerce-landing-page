import React from 'react';
import { createBrowserRouter } from "react-router";
import Account from '../components/Account';
import Home from '../Pages/Home';
import Root from '../Layout/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/account",
        element: <Account></Account>,
      },
    ],
  },
]);

export default router;