import * as React from 'react';
import { Outlet } from 'react-router-dom';

export function About() {
  return (
    <div>
      <h2>About</h2>
      <Outlet />
    </div>
  );
}
export const Component = () => <About />;
