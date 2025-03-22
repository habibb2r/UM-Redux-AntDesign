import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                path: 'create-admin',
                element: <CreateAdmin />
            }
        ]
    }
])

export default router;