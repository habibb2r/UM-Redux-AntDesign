import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { ReactNode } from "react";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";
import Login from "../pages/login/login";

export type TRoute = {
    path: string,
    element: ReactNode,
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/superAdmin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routeGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App />,
        children: routeGenerator(studentPaths)
    },
    {
        path: '/login',
        element: <Login />
        
    }
])

export default router;