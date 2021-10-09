import React from "react";
import { Container } from "react-grid-system";
import Logo from "../common/logo";
import Title from "../common/Title";
import Form_ from "./Form";

function SignUpForm() {
  return (
    <>
      <Container>
      <Title title="Sign In " class="title-signup pt-4" />
      <Form_ />
      </Container>

    </>
  );
}

export default SignUpForm;
