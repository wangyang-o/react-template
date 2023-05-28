import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './layout';

export const App = () => {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
};
