import React from "react";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from 'react-bootstrap/Button';

function Form_() {
  return (
    <>
      <Form className="form-login">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            className="input-login"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-login"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember Me."
            className="text-blue"
          />
        </Form.Group>
        {/* <Button variant="contained" className="mb-4 btn-login">
          Login
        </Button> */}

        <Button variant="primary" className="btn-login mb-4">Login</Button>{' '}

        <GoogleButton className="btn-login" type="light"
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </Form>
    </>
  );
}

export default Form_;
