import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout } from "./layout";

export const App = () => {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Layout>
        <Outlet></Outlet>
      </Layout>
      {/* <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/home/washroom">washroom</Link>
      <Link to="/about/resume">resume</Link> */}
    </div>
  );
};
