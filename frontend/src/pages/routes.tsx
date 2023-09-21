import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Home/'
import { SignInPage } from './SignIn'
import { ShopDashboard } from './ShopDashboard'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signin',
        element: <SignInPage />
    },
    {
        path: '/shopdashboard',
        element: <ShopDashboard />
    }
])

export const privateRoutes = createBrowserRouter([ // Here will be private routes later
    {
        path: '/',
        element: <Home />
    }
])