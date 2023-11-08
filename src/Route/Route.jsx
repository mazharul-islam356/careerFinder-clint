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
import AllJob from "../components/AllJob/AllJob";
import Details from "../components/AllJob/Details";
import Update from "../components/ConditionalRoute/MyJobs/Update";
import PrivetRoute from "../Authentication/PrivetRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('https://assingment-11-server-eight.vercel.app/addJobs')
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
                element:<PrivetRoute><AppliedJobs></AppliedJobs></PrivetRoute>,
                loader: () => fetch('https://assingment-11-server-eight.vercel.app/apply')
            },
            {
                path:'/myJobs',
                element:<PrivetRoute><MyJobs></MyJobs></PrivetRoute>,
                loader: () => fetch('https://assingment-11-server-eight.vercel.app/addJobs')
                
            },
            {
                path:'/addJob',
                element:<PrivetRoute><AddAjob></AddAjob></PrivetRoute>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path: '/allJobs',
                element:<AllJob></AllJob>,
                loader: () => fetch('https://assingment-11-server-eight.vercel.app/addJobs')
            },
            {
                path: '/details/:id',
                element:<PrivetRoute><Details></Details></PrivetRoute>,
                loader: () => fetch('https://assingment-11-server-eight.vercel.app/addJobs')
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader: ({params})=>fetch(`https://assingment-11-server-eight.vercel.app/addJobs/${params.id}`)
                
            }


    ]
    
    },

    {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
])

export default routes;