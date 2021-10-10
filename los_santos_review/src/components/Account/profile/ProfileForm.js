import React from "react";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from 'react-bootstrap/Button';

function ProfileForm() {
  return (
    <>
      <Form className="form-login">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            className="input-"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-profile"
          />
        </Form.Group>

        
      

        <Button variant="primary" className="btn-login mb-4">Login</Button>{' '}

     
      </Form>
    </>
  );
}

export default ProfileForm;
