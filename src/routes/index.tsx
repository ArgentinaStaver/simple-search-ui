import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ResourcesPage from '../pages/Resources/ResourcesPage';
import ResourceDetailsPage from '../pages/Resources/ResourceDetailsPage';
import HomePage from '../pages/HomePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/resources',
        element: <ResourcesPage />,
      },
      {
        path: '/resources/:toolId',
        element: <ResourceDetailsPage />,
      },
    ],
  }
]);

export default router;
