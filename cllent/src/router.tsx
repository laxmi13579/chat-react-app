import { Children } from "react"
import { createBrowserRouter } from "react-router-dom"
import { AuthLayoout } from "./pages/layouts/AuthLayout"
import { Login } from "./pages/Login"
import { Sinup } from "./pages/Sinup"

export const router = createBrowserRouter([
    {
        element: <AuthLayoout/>,
        children: [
            { path: 'login', element: <Login/> },
            { path: 'sinup', element: <Sinup/> },
        ]
    }
])