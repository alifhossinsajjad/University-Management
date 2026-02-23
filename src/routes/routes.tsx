import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { adminPaths } from "./adminRoutes";
import { routesGenaretor } from "../utils/routesGenaretor";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import PrivetRoute from "../components/layout/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <PrivetRoute>
        <App />
      </PrivetRoute>
    ),
    children: routesGenaretor(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenaretor(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenaretor(studentPaths),
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
