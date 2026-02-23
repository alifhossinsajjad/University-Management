import React, { type ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { userCurrentToken } from "../../redux/feature/auth/authSlice";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default PrivetRoute;
