import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { publicRoutes } from './pages/routes';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={client}>
    <RouterProvider router={publicRoutes} />
  </QueryClientProvider>
);