import React from 'react';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
// import styles from "./index.css";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = [
        { age: 11, name: 'wy' },
        { age: 11, name: 'wy' },
      ];
      const a = ['ahah', 'ashdj', 'ahah', '', 'ashdj', 'ashdj', 'ahah', '', 'ashdj'];
      resolve({ list, a });
    }, 500);
  });
};
export const loader: LoaderFunction = async () => {
  const data = await fetchData();
  return data;
};
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>Home</h2>
      <Outlet></Outlet>
    </div>
  );
};
export const Component = () => <Home />;
