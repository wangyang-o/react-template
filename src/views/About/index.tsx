import * as React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { A } from "../../components/A";

export function Component() {
  return (
    <div>
      <h2>About</h2>
      <A></A>
      <Outlet />
    </div>
  );
}
