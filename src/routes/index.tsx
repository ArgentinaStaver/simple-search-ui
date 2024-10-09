import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ResourcesPage from '../pages/Resources/ResourcesPage';
import ResourceDetailsPage from '../pages/Resources/ResourceDetailsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <div>Here will be the homepage</div>,
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
