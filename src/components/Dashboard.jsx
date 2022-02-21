import { Navigate } from "react-router-dom";
import { RegisPage } from "./RegisterPage";
import React, { useContext } from "react";

export const Dashboard = () => {
  const { isLogin, form } = useContext(RegisPage);
  console.log(isLogin);
  return (
    <div>
      {isLogin ? (
        <div>Welcome to Dashboard!!! {form.fullName}</div>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </div>
  );
};
