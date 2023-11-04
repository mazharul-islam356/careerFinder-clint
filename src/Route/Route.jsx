import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../404page/ErrorPage";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AppliedJobs from "../components/ConditionalRoute/AppliedJobs/AppliedJobs";
import MyJobs from "../components/ConditionalRoute/MyJobs/MyJobs";
import AddAjob from "../components/ConditionalRoute/AddAJob/AddAjob";
import Blog from "../components/Blog/Blog";

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
            },
            {
                path:'/appliedJob',
                element:<AppliedJobs></AppliedJobs>
            },
            {
                path:'/myJobs',
                element:<MyJobs></MyJobs>
            },
            {
                path:'/addJob',
                element:<AddAjob></AddAjob>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            }


    ]
    
    },

    {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
])

export default routes;