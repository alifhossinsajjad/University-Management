import React, { type ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";

import { Navigate } from "react-router";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";

const PrivetRoute = ({ children }: { children: ReactNode }) => {
   const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivetRoute;
