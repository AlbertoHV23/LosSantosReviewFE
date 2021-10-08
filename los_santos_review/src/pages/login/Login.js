import React from "react";
//My components

//Material UI & Bootstrap components
import { Grid } from "@mui/material";

import "./Login.scss";
import LoginInformation from "../../components/login/LoginInformation";
import LoginForm from "../../components/login/LoginForm";

function Login() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>

        <Grid item xs={12} md={6}>
          <LoginInformation />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
