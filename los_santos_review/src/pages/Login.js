import React from "react";
import Logo from "../components/common/logo";
import Button from "@mui/material/Button";

function Login() {
  return (
    <>
      <div>Login</div>
      <Logo></Logo>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Primary</Button>
    </>
  );
}

export default Login;
