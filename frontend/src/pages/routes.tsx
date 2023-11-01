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
import { ShopOrders } from '../modules/ShopOrders'
import { ShopCustomers } from '../modules/ShopCustomers'
import { ShopPage } from './ShopPage'
import { ShopChat } from '../modules/ShopChat'
import { ShopChoose } from '../modules/ShopChoose'
import { ShopProfile } from '../modules/ShopProfile'
import { AdminComplaints } from '../modules/AdminComplaints'
import { AdminAccounts } from '../modules/AdminAccounts'
import { AdminProducts } from '../modules/AdminProducts'
import { CustomerDashboardLayout } from './CustomerDashboardLayout'
import { CustomerProfile } from '../modules/CustomerProfile'
import { CustomerOrders } from '../modules/CustomerOrders'
import { CustomerComplaints } from '../modules/CustomerComplaints'
import { CustomerChat } from '../modules/CustomerChat'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shops/:id',
                element: <ShopPage />
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
                path: '/signup/profile',
                element: <CreateProfile />,
            },
            {
                path: '/signup/profile/photo',
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
                path: 'complaints',
                element: <AdminComplaints />,
            },
            {
                path: 'accounts',
                element: <AdminAccounts />,
            },
            {
                path: 'products',
                element: <AdminProducts />
            },
        ]
    },
    {
        path: '/customer',
        element: <CustomerDashboardLayout />,
        children: [
            {
                path: '/customer/',
                element: <Navigate to={'/customer/profile'} />
            },
            {
                path: 'profile',
                element: <CustomerProfile />
            },
            {
                path: 'complaints',
                element: <CustomerComplaints />,
            },
            {
                path: 'orders',
                element: <CustomerOrders />,
            },
            {
                path: 'cuschat',
                element: <CustomerChat />,
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
                element: <ShopChoose />
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
                element: <ShopOrders />
            },
            {
                path: 'customers',
                element: <ShopCustomers />
            },
            {
                path: 'cusChat',
                element: <ShopChat />
            },
            {
                path: 'profile',
                element: <ShopProfile />
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