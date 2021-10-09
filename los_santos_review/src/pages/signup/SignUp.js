import React from "react";
//My components

//Material UI & Bootstrap components
import { Grid } from "@mui/material";

import "./SignUp.scss";
import LoginInformation from "../../components/login/LoginInformation";
import LoginForm from "../../components/login/LoginForm";
import SignUpForm from "../../components/signup/SignUpForm";
import SignUpInformation from "../../components/signup/SignUpInformation";

function SignUp() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <SignUpInformation />
        </Grid>

        <Grid item xs={12} md={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  );
}

export default SignUp;