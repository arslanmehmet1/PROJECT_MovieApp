import React, { useState } from "react";
import { signInUser } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button onClick={() => signInUser({ email, password })}>sign in</button>
      <br />
      <button>sign in with google</button>
    </div>
  );
};

export default Login;
