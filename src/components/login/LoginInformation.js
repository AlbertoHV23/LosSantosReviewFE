import React from "react";
import Legend from "../common/Legend";
import Title from "../common/Title";
import { Container } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

// const imagen = "./Login.svg";
function LoginInformation() {
  
  const history = useHistory();
  const routeChange = (ruta) => {
    localStorage.clear()
  window.localStorage.setItem(
    'user' , "No session"
  )
    let path = 'signup';
    // history.push(path);
  };
  return (
    <>
      <Container>
        <Title title="You are now?" class="title-legend pt-5"></Title>
        <Legend
          title="Create an account and start viable an opinion with other users."
          class="login-legend"
        ></Legend>
        <img
          className="svg"
          src={`${process.env.PUBLIC_URL}/assets/img/Login.svg`}
          alt = "Alternative text"
        />
        <Button variant="outline-primary" className="test" href="/signup" onClick={routeChange}>
          Sign Up
        </Button>{" "}
      </Container>
    </>
  );
}

export default LoginInformation;
