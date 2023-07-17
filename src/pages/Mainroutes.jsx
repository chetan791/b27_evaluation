import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Register } from "./Register";
import { Login } from "./Login";

export const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
};
