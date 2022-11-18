import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/Login/auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.profileUsername && !auth.profileImg) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};
