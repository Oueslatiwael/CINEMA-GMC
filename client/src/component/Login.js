import React, { useState } from "react";
import { Footer } from "./Footer";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../JS/actions/userAction";

export const Login = () => {
  return (
    <div
      className="login_wrapper"
      style={{
        backgroundImage: `url("popcorn.png")`,
      }}
    >
      <form>
        <h2 style={{ color: "white" }}>Sign in to join</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
        <span>
          Don't have an account ?{" "}
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>
            Sign up here
          </span>
        </span>
      </form>

      <Footer />
    </div>
  );
};
