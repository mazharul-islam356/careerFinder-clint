import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../404page/ErrorPage";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
            path: '/',
            element:<Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

    ]
    
    },

    {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
])

export default routes;