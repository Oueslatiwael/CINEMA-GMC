import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../JS/actions/userAction";
import "./Login.css";
import { Footer } from "./Footer";

export const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(12344567);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.userReducer.error);

  const register = (e) => {
    const newUser = { fullName, email, password, phone };
    e.preventDefault();
    dispatch(userRegister(newUser));
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="login_wrapper"
      style={{
        backgroundImage: `url("popcorn.png")`,
      }}
    >
      <form>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="number"
          placeholder="Phone"
          onChange={(e) => setFullName(e.target.value)}
          value={phone}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="password" placeholder="Confirm password" />
        <button onClick={register}>Sign up</button>
        <span>
          Already have an account ?{" "}
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>
            Sign in here
          </span>
        </span>
      </form>
      <Footer />
    </div>
  );
};
