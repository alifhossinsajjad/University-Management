import { type ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


type TRoute = {
path : string,
element : ReactNode
}





const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//programetical way

export const adminRoutes = adminPaths.reduce((acc : TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.Children) {
    item.Children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc
}, []);

//! hard code way

// export const adminPaths = [
//   {
//     path: "dashboard",
//     Component: AdminDashboard,
//   },
//   {
//     path: "create-student",
//     Component: CreateStudent,
//   },
//   {
//     path: "create-admin",
//     Component: CreateAdmin,
//   },
//   {
//     path: "create-faculty",
//     Component: CreateFaculty,
//   },
// ];
