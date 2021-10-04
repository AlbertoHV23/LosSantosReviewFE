import React from "react";
import { Form, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

function LoginForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            className="input-login"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-blue">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-login"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember Me."
            className="text-blue"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-4">
          Login
        </Button>
        
        <GoogleButton 
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </Form>
    </>
  );
}

export default LoginForm;
