import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const RegisPage = createContext();

export const RegisterPage = ({ children }) => {
  const [loginEmail, setLoginEmail] = React.useState({
    email: "",
    password: "",
    fullName: "",
  });
  const navigate = useNavigate();
  console.log(navigate);
  const [form, setForm] = React.useState({});
  const [preReq, setPreReq] = React.useState({ attend: false, laptop: false });
  const [isLogin, setIsLogin] = React.useState(false);

  const value = {
    loginEmail,
    setLoginEmail,
    isLogin,
    setIsLogin,
    preReq,
    setPreReq,
    form,
    navigate,
    setForm,
  };
  return <RegisPage.Provider value={value}>{children}</RegisPage.Provider>;
};
