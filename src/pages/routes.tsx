
import { createBrowserRouter } from 'react-router-dom'
import Home1 from './Home/Home1'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home1 />
    }
])

export const privateRoutes = createBrowserRouter([ // Here will be private routes later
    {
        path: '/',
        element: <Home1 /> 
    }
])