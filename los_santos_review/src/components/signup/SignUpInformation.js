import React from "react";
import Legend from "../common/Legend";
import Title from "../common/Title";
import { Container } from "react-grid-system";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";


const imagen = './Login.svg';
function SignUpInformation() {
  const history = useHistory();
  const routeChange = (ruta) => {
    let path = 'login';
    history.push(path);
  };
    return (
        <>
        <Container>
        <img className="svg-signup" src={`${process.env.PUBLIC_URL}/assets/img/SignUp.svg`}  alt="" />     
        <Title title ="What's new?"  class = "title-legend"></Title>
        <Legend title ="Don't you know? Check it out for yourself Login"  class = "login-legend"></Legend>
        <Button variant="outline-primary" className="btn-legend-signup" onClick={routeChange}>Sign Up</Button>{' '}
        </Container>
        </>
      );
}

export default SignUpInformation;