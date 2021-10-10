import React from "react";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from 'react-bootstrap/Button';

function ProfileForm() {
  return (
    <>
      <Form className="form-login">
      <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Name(s):</Form.Label>
          <Form.Control
            type="text"
            className="input-profile"
            value ="Alberto"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Surnames(s):</Form.Label>
          <Form.Control
            type="text"
            className="input-profile"
            value ="Hernadez"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Username):</Form.Label>
          <Form.Control
            type="text"
            className="input-profile"
            value ="Alberthor"
          />
        </Form.Group>
        
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            className="input-profile"
            value = "albertho0.hdzv@gmail.com"
          />
        </Form.Group>

      

        
      

        <Button variant="primary" className="btn-login mb-4">Save</Button>{' '}

     
      </Form>
    </>
  );
}

export default ProfileForm;
