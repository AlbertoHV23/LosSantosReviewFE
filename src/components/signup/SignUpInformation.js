import React from "react";
import Legend from "../common/Legend";
import Title from "../common/Title";
import { Container } from "react-grid-system";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";


function SignUpInformation() {
  const history = useHistory();
  const routeChange = () => {
    localStorage.clear()
    window.localStorage.setItem(
      'user' , "login"
    )
    // let path = 'login';
    // history.push(path);
  };
    return (
        <>
        <Container>
        <img className="svg-signup" src={`${process.env.PUBLIC_URL}/assets/img/SignUp.svg`}  alt="" />     
        <Title title ="What's new?"  class = "title-legend"></Title>
        <Legend title ="Don't you know? Check it out for yourself Log In"  class = "login-legend"></Legend>
        <Button variant="outline-primary" className="btn-legend-signup" href="/login" onClick={routeChange}>Log In</Button>{' '}
        </Container>
        </>
      );
}

export default SignUpInformation;