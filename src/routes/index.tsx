import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Resume } from "../views/About/Resume";
import { App } from "../App";
import { NotFundPage } from "../views/NotFundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFundPage />,
    children: [
      {
        path: "home",
        lazy: () => import("@src/views/Home"),
        children: [
          {
            path: "washroom",
            lazy: async () => {
              let { Washroom } = await import(
                /* webpackChunkName: "about" */ "@src/views/Home/Washroom"
              );
              return { Component: Washroom };
            },
          },
        ],
      },
      {
        path: "about",
        lazy: () => import(/* webpackChunkName: "about" */ "../views/About"),
        children: [
          {
            path: "resume",
            element: <Resume />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFundPage />,
  },
]);
