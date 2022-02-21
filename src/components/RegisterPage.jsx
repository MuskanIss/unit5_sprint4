import React, { createContext } from "react";

export const RegisPage = createContext();

export const RegisterPage = ({ children }) => {
  const [loginEmail, setLoginEmail] = React.useState({
    email: "",
    password: "",
    fullName: "",
  });
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
    setForm,
  };
  return <RegisPage.Provider value={value}>{children}</RegisPage.Provider>;
};
