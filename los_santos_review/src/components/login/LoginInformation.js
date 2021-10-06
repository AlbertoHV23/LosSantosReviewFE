import React from "react";
import Legend from "../common/Legend";
import Title from "../common/Title";
import Button from "@mui/material/Button";
import { Container } from "react-grid-system";

const imagen = './Login.svg';
function LoginInformation() {
    return (
        <>
        <Container>
        <Title title ="You are now?"  class = "title-legend"></Title>
        <Legend title ="Create an account and start viable an opinion with other users."  class = "login-legend"></Legend>
        <img className="svg" src={`${process.env.PUBLIC_URL}/assets/img/Login.svg`}  alt="" />     
        <Button variant="outlined" className="btn-login" color="secondary" sx={{ display: 'block' }}>Sign Up</Button>
        </Container>
        </>
      );
}

export default LoginInformation;