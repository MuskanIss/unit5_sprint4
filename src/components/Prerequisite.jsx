import { RegisPage } from "./RegisterPage";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "styled-components";

const CONTINUE = style.input``;

export const Prerequisite = () => {
  const { preReq, setPreReq } = useContext(RegisPage);
  const navigate = useNavigate();
  const prere = (e) => {
    e.preventDefault();
    if (preReq.attend && preReq.laptop) {
      navigate("/info");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => prere(e)}>
        <input
          type="checkbox"
          onChange={(e) =>
            setPreReq({ ...preReq, attend: e.currentTarget.checked })
          }
        />
        <label>Can you attend 90% of the classess</label>
        <br />
        <input
          type="checkbox"
          onChange={(e) =>
            setPreReq({ ...preReq, laptop: e.currentTarget.checked })
          }
        />
        <label>Do you have a laptop?</label>
        <br />
        <input
          disabled={!preReq.attend || !preReq.laptop}
          type="submit"
          value="CONTINUE"
        />
      </form>
    </div>
  );
};
