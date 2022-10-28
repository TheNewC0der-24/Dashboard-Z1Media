import { Navigate, useRoutes } from 'react-router-dom';

// Layout
import DashboardLayout from "../Layouts";

// Components
import Dashboard from '../Components/Dashboard';


const Router = () => {

    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,

            children: [
                { path: "", element: <Navigate to="/dashboard" /> },

                { path: "dashboard", element: <Dashboard /> },
            ]
        },
        {
            path: 'dashboard',
            element: <Navigate to="/dashboard" />
        },
        {
            path: '*',
            element: <h1>Page Not Found</h1>
        },
    ])
}

export default Router;