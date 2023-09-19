import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Home/'
import { SignInPage } from './SignIn'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signin',
        element: <SignInPage />
    }
])

export const privateRoutes = createBrowserRouter([ // Here will be private routes later
    {
        path: '/',
        element: <Home />
    }
])