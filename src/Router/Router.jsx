import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register/Register";
import SignIn from "../Pages/Home/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
import AllJob from "../Pages/AllJob/AllJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs',
                element: <AllJob></AllJob>
            },
            {
                path: 'job/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-seven-psi.vercel.app/job/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: 'myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: 'viewApplications/:job_id',
                element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-seven-psi.vercel.app/job-application/job/${params.job_id}`)
            },
            {
                path: 'addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;