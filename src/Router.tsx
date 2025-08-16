import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootPage } from './RootPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
