import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./adminRoutes";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },
  {
    path: "/admin",
    element: <App />,
    children: adminPaths
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminPaths
  },
  {
    path: "/student",
    element: <App />,
    children: adminPaths
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
