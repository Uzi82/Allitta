import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Home/'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

export const privateRoutes = createBrowserRouter([ // Here will be private routes later
    {
        path: '/',
        element: <Home /> 
    }
])