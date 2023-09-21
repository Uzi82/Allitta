import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { publicRoutes } from './pages/routes';
import { QueryClientProvider, QueryClient } from 'react-query';
import './style.css'
import { Provider } from 'react-redux';
import store from './store';

const client = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <RouterProvider router={publicRoutes} />
    </QueryClientProvider>
  </Provider>
);