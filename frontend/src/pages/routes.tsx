import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Home/'
import { SignUpPage } from './SignUpPage'
import { SignInPage } from './SignInPage'
import { CreateCustomerAccount, CreateShoperAccount, ProfilePicture, Verification } from '../components/SignUp'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <SignUpPage />,
        children: [
            {
                index: true,
                element: <CreateShoperAccount />,
            },
            {
                path: '/signup/verify',
                element: <Verification />,
            },
            {
                path: '/signup/customer',
                element: <CreateCustomerAccount />,
            },
            {
                path: '/signup/customer/photo',
                element: <ProfilePicture />,
            },
        ]


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