import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Home } from './Home/'
import { RegistrationLayout } from './RegistrationLayout'
import { AuthorizationLayout } from './AuthorizationLayout'
import { Layout } from './Layout'
import { DashboardLayout } from './DashboardLayout'
import { Dashboard } from '../modules/Dashboard'
import { CreateProfile, CreateAccount, ProfilePicture, Verification } from '../modules/Registration'
import { ForgetPassword, ResetPassword, SignIn, VerifyingEmail } from '../modules/Authorization'
import { ShopProducts } from '../modules/ShopProducts'
import { AdminDashboardLayout } from './AdminDashboardLayout'
import { AdminDashboard } from '../modules/AdminDashboard'
import { AccountDetailed, ProductDetailed } from '../components/AdminDetailedItem'

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
        path: '/signup',
        element: <RegistrationLayout />,
        children: [
            {
                index: true,
                element: <CreateAccount />,
            },
            {
                path: '/signup/verify',
                element: <Verification />,
            },
            {
                path: '/signup/customer',
                element: <CreateProfile />,
            },
            {
                path: '/signup/customer/photo',
                element: <ProfilePicture />,
            },
        ]


    },
    {
        path: '/admin',
        element: <AdminDashboardLayout />,
        children: [
            {
                path: '/admin/',
                element: <Navigate to={'/admin/dashboard'} />
            },
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'complaint',
                element: <></>,
            },
            {
                path: 'accounts',
                element: <AccountDetailed></AccountDetailed>,
            },
            {
                path: 'products',
                element: <ProductDetailed>products</ProductDetailed>
            },
        ]


    },
    {
        path: '/signin',
        element: <AuthorizationLayout />,
        children: [
            {
                index: true,
                element: <SignIn />,
            },
            {
                path: '/signin/verify',
                element: <VerifyingEmail />,
            },
            {
                path: '/signin/forget',
                element: <ForgetPassword />,
            },
            {
                path: '/signin/reset',
                element: <ResetPassword />,
            },
        ]
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
                element: <ShopProducts />
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