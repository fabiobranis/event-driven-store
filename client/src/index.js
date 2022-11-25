import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.js';

import ProductPage from './ProductPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root'))
  .render(<RouterProvider router={router} />);
