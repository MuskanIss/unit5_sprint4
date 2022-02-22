import { RegisPage } from "./RegisterPage";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const { setForm, form, navigate } = useContext(RegisPage);
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
      fetch("https://json-servermusk.herokuapp.com/loginInfo", {
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
            value={form.Email}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) =>
              setForm({ ...form, Password: e.currentTarget.value })
            }
            value={form.Password}
          />
          <br />
          <label>Full Name</label>
          <input
            onChange={(e) =>
              setForm({ ...form, fullName: e.currentTarget.value })
            }
            value={form.fullName}
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
