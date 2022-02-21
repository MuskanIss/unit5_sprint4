import { RegisPage } from "./RegisterPage";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const Info = () => {
  const { preReq, form, setForm } = useContext(RegisPage);
  const navigate = useNavigate();
  const formSub = (e) => {
    e.preventDefault();
    setForm({ ...form, id: uuid() });
    if (
      form.passingYear &&
      form.qualification &&
      form.date &&
      form.gender &&
      form.state
    ) {
      navigate("/register");
    }
  };
  return (
    <div>
      {preReq.attend && preReq.laptop ? (
        <form onSubmit={(e) => formSub(e)}>
          <label>Highest qualification</label>
          <input
            onChange={(e) =>
              setForm({ ...form, qualification: e.currentTarget.value })
            }
          />
          <br />
          <label>Passing Year</label>
          <input
            onChange={(e) =>
              setForm({ ...form, passingYear: e.currentTarget.value })
            }
          />
          <br />
          <label>Date of birth</label>
          <input
            type="date"
            onChange={(e) => setForm({ ...form, date: e.currentTarget.value })}
          />
          <br />
          <label>Gender</label>
          <select
            onChange={(e) =>
              setForm({ ...form, gender: e.currentTarget.value })
            }
          >
            <option></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label>State</label>
          <input
            onChange={(e) => setForm({ ...form, state: e.currentTarget.value })}
          />
          <input
            type="submit"
            disabled={
              !form.passingYear ||
              !form.qualification ||
              !form.date ||
              !form.gender ||
              !form.state
            }
            value="REGISTER"
          />
        </form>
      ) : (
        <Navigate to="/prerequisite"></Navigate>
      )}
    </div>
  );
};
