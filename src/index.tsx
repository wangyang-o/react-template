import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from '@src/routes';
import './reset.scss';

createRoot(document.getElementById('root') as Element).render(
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
);
