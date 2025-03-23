import FacultyDashboard from "../pages/factulty/FacultyDashboard";
import OfferedCourse from "../pages/factulty/OfferedCourse";

export const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard />
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />
    }
   
]
