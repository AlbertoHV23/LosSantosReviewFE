import React from "react";
//My components
import Logo from "../../components/common/logo";
import Title from "../../components/login/Title";
import LoginForm from "../../components/login/Form";

//Material UI & Bootstrap components
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

import "./Login.scss";

function Login() {
  return (
    <>
      <Grid container>
        <Grid item xs={4} md={6}>
          <Logo />
          <Title title="Login" />
          <LoginForm />
        </Grid>
        <Grid item xs={4} md={6}>
          <Button variant="outlined">Log in</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
