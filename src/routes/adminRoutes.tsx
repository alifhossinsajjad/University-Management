import { Children } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    Component: <AdminDashboard />,
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        Component: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        Component: <CreateFaculty/>,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        Component: <CreateStudent/>,
      }, 
    ],
  },
  {
    name: "Course Management",
    Children: [
      {
        name: "Offered Course",
        path: "/admin/offered-course",
        Component: <CreateAdmin />,
      },
    ],
  },
];

export const adminPaths = [
  {
    path: "dashboard",
    Component: AdminDashboard,
  },
  {
    path: "create-student",
    Component: CreateStudent,
  },
  {
    path: "create-admin",
    Component: CreateAdmin,
  },
  {
    path: "create-faculty",
    Component: CreateFaculty,
  },
];
