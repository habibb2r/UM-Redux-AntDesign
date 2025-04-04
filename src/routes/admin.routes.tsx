
import AcademicSemester from "../pages/admin/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";



export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Academic Semesters",
                path: "academic-semesters",
                element: <AcademicSemester />
            },
            
        ]
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            },
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />
            }
        ]
    }
]

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item)=>{
//     if(item.path && item.element){
//         acc.push({
//             path: item.path,
//             element: item.element,
//         })
//     }
//     if(item.children){
//         item.children.forEach((child)=>{
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc;
// }, [])

// export const adminSideBar = adminPaths.reduce((acc: TSideBarItem[], item)=>{
//     if(item.name && item.path){
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         })
//     }
//     if(item.children){
//        acc.push({
//            key: item.name,
//            label: item.name,
//            children: item.children.map((child)=>({
//             key: child.name,
//             label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//         }))
//        })
//     }
//     return acc;
// }, [])

// export const adminPaths =[
//     {
//         index: true,
//         element: <AdminDashboard />
//     },
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin />
//     }
// ];

