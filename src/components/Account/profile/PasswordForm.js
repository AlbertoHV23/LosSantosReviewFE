import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function PasswordForm() {
  return (
    <>
      <Form className="form-login">

      <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Old Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-login"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">New Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-login"
          />
        </Form.Group>
      
        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="text-blue">Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-login"
          />
        </Form.Group>
      
      

        <Button variant="primary" className="btn-login mb-4">Save</Button>{' '}

     
      </Form>
    </>
  );
}

export default PasswordForm;
