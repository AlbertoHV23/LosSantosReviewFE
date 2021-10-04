import React from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
      <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label className="text-blue">Email:</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" className="input-login" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-blue">Password:</Form.Label>
        <Form.Control type="password" placeholder="********" className="input-login" />
      </Form.Group>
      <Form.Group className="mb-3 text-blue" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </>

  );
}

export default LoginForm;