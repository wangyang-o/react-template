import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { NotFundPage } from '../views/NotFundPage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFundPage />,
    children: [
      {
        path: 'home',
        lazy: () => import(/* webpackChunkName: "home" */ '@src/views/Home'),
        children: [
          {
            path: 'washroom',
            lazy: async () =>
              import(
                /* webpackChunkName: "washroom" */ '@src/views/Home/Washroom'
              ),
          },
        ],
      },
      {
        path: 'about',
        lazy: () => import(/* webpackChunkName: "about" */ '../views/About'),
        children: [
          {
            path: 'resume',
            lazy: () =>
              import(/* webpackChunkName: "resume" */ '../views/About/Resume'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFundPage />,
  },
]);
