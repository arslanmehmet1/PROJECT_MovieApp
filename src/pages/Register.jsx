import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { createUser, signInUser } from "../auth/firebase";
import { Message } from "@mui/icons-material";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        // sx={{ mt: "4rem" }}
      >
        <Grid item xs={12} lg={6}>
          <img
            src="https://images.pexels.com/photos/13793527/pexels-photo-13793527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            class="kule"
          />
        </Grid>
        <Grid
          class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-6 css-f0xsrb-MuiGrid-root login"
          item
          xs={12}
          lg={6}
        >
          <p>Register</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={() => createUser(email, password)}>Register</button>
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
