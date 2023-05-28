import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout } from "./layout";

export const App = () => {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
};
