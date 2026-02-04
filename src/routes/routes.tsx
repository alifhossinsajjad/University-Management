import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routesGenaretor } from "../utils/routesGenaretor";
import { adminPaths } from "./adminRoutes";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenaretor(adminPaths)
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenaretor(adminPaths)
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenaretor(adminPaths)
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
