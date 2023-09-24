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
        path: '/shopMenu/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/shopMenu/',
                element: <Navigate to={'/shopMenu/Dashboard'} />
            },
            {
                path: 'DashBoard',
                element: <Dashboard />
            },
            {
                path: 'Product',
                element: <>321</>
            },
            {
                path: 'Orders',
                element: <>321</>
            },
            {
                path: 'Customers',
                element: <>321</>
            },
            {
                path: 'CusChat',
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