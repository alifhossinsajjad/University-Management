import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./adminRoutes";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes
  },
  {
    path: "/student",
    element: <App />,
    children: adminRoutes
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
