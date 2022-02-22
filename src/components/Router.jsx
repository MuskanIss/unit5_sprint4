import React from "react";
import { Home } from "./Home";
import { Prerequisite } from "./Prerequisite";
import { Info } from "./Info";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import loginInfo from "./db.json";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/prerequisite" element={<Prerequisite />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/loginInfo" element={<Json />}></Route>
      </Routes>
    </div>
  );
};
function Json() {
  return <>{JSON.stringify(loginInfo)}</>;
}
