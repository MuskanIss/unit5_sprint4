import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisPage } from "./RegisterPage";

export const Home = () => {
  const { loginEmail, setLoginEmail, setIsLogin, isLogin, setForm, form } =
    useContext(RegisPage);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    console.log(isLogin);
    fetch("http://localhost:3000/loginInfo")
      .then((res) => res.json())
      .then((res) => {
        res.map((item) => {
          if (
            loginEmail.email === item.Email &&
            loginEmail.password === item.Password
          ) {
            setForm({
              ...form,
              fullName: item.fullName,
              Email: item.Email,
              Password: item.Password,
            });
            setIsLogin(true);
            navigate("/dashboard");
            return null;
          }
          return null;
        });
      });
  };
  return (
    <div>
      <nav>
        <Link to="/prerequisite">SIGN UP</Link>
      </nav>
      <div onSubmit={(e) => login(e)}>
        <form>
          <label>Email address</label>
          <input
            onChange={(e) =>
              setLoginEmail({ ...loginEmail, email: e.currentTarget.value })
            }
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) =>
              setLoginEmail({ ...loginEmail, password: e.currentTarget.value })
            }
          />
          <br />
          <input type="submit" value="LOGIN" />
        </form>
      </div>
    </div>
  );
};
