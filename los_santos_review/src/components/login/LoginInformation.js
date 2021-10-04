import React from "react";
import Legend from "../common/Legend";
import Title from "../common/Title";
import Button from "@mui/material/Button";

const imagen = './Login.svg';
function LoginInformation() {
    return (
        <>
        <Title title ="You are now?"  class = "title-legend"></Title>
        <Legend title ="Create an account and start viable an opinion with other users."  class = "login-legend"></Legend>
        <img className="svg" src='https://firebasestorage.googleapis.com/v0/b/camppus-224af.appspot.com/o/Login.svg?alt=media&token=71308044-38d8-44ee-9724-e8a1e6f66a4b' alt="" />
     
        <Button variant="outlined" color="secondary" sx={{ display: 'block' }}>Sign Up</Button>
        </>
      );
}

export default LoginInformation;