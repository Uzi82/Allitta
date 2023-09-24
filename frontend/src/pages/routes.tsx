import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Home } from './Home/'
import { SignInPage } from './SignIn'
import { Layout } from './Layout'
import { DashboardLayout } from './DashboardLayout'
import { Dashboard } from '../modules/Dashboard'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/signin',
        element: <SignInPage />
    },
    {
        path: '/shop/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/shop/',
                element: <Navigate to={'/shop/dashboard'} />
            },
            {
                path: 'dashBoard',
                element: <Dashboard />
            },
            {
                path: 'product',
                element: <>321</>
            },
            {
                path: 'orders',
                element: <>321</>
            },
            {
                path: 'customers',
                element: <>321</>
            },
            {
                path: 'cusChat',
                element: <>321</>
            }
        ]
    }
])

export const privateRoutes = createBrowserRouter([ // Here will be private routes later
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
])