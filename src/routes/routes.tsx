import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";
import { ReactNode } from "react";

export type TRoute = {
    path: string,
    element: ReactNode,
}

export type TSideBarItem ={
    key: string,
    label: ReactNode,
    children?: TSideBarItem[]
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: adminRoutes
    },
    {
        path: '/faculty',
        element: <App />,
        children: adminRoutes
    },
    {
        path: '/student',
        element: <App />,
        children: adminRoutes
    }
])

export default router;