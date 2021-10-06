import React from "react";
import { Container } from "react-grid-system";
import Logo from "../common/logo";
import Title from "../common/Title";
import Form_ from "./Form";

function LoginForm() {
  return (
    <>
      <Container>
      <Logo />
      <Title title="Login" class="title-login" />
      <Form_ />
      </Container>

    </>
  );
}

export default LoginForm;
