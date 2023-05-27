import React from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "@src/routes";

createRoot(document.getElementById("root") as Element).render(
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
);
