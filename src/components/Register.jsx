import { RegisPage } from "./RegisterPage";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
  const { setForm, form } = useContext(RegisPage);
  const navigate = useNavigate();
  const regiser = (e) => {
    e.preventDefault();
    if (
      form.passingYear &&
      form.qualification &&
      form.date &&
      form.gender &&
      form.state &&
      form.Email &&
      form.Password &&
      form.fullName
    ) {
      fetch("http://localhost:3000/loginInfo", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      navigate("/");
    }
  };
  return (
    <div>
      {form.passingYear &&
      form.qualification &&
      form.date &&
      form.gender &&
      form.state ? (
        <form onSubmit={(e) => regiser(e)}>
          <label>Email address</label>
          <input
            onChange={(e) => setForm({ ...form, Email: e.currentTarget.value })}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) =>
              setForm({ ...form, Password: e.currentTarget.value })
            }
          />
          <br />
          <label>Full Name</label>
          <input
            onChange={(e) =>
              setForm({ ...form, fullName: e.currentTarget.value })
            }
          />
          <br />
          <input type="submit" value="SIGN UP" />
        </form>
      ) : (
        <Navigate to="/info"></Navigate>
      )}
    </div>
  );
};
