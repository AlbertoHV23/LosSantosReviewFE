import React from "react";
import Legend from "../common/Legend";
import Title from "../common/Title";
import { Container } from "react-grid-system";
import Button from 'react-bootstrap/Button';


const imagen = './Login.svg';
function LoginInformation() {
    return (
        <>
        <Container>
        <Title title ="You are now?"  class = "title-legend pt-5"></Title>
        <Legend title ="Create an account and start viable an opinion with other users."  class = "login-legend"></Legend>
        <img className="svg" src={`${process.env.PUBLIC_URL}/assets/img/Login.svg`}  alt="" />     
        <Button variant="outline-primary" className="test">Sing Up</Button>{' '}
        </Container>
        </>
      );
}

export default LoginInformation;