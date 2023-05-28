import React from "react";
import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
// import styles from "./index.css";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ list: [{ age: 1 }] });
    }, 500);
  });
};
export const loader: LoaderFunction = async (args) => {
  let data = await fetchData();
  return data;
};
const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>Home</h2>
      <Outlet></Outlet>
    </div>
  );
};
export const Component = () => <Home />;
