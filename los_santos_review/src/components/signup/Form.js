import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from "react-bootstrap/Button";
import axios from "axios";




function Form_() {

  return (
    <>
      <Form className="form-signup">
        <Form.Group className="mb-4" controlId="formBasicDropdown">
          <Form.Label className="text-pink">Rol:</Form.Label>
          <Dropdown className="input-signup">
            <Dropdown.Toggle variant="" id="dropdown-basic" className="w-100 input-signup " >
              Rol
            </Dropdown.Toggle>

            <Dropdown.Menu  className="w-100 ">
              <Dropdown.Item className="w-100 ">Review User</Dropdown.Item>
              <Dropdown.Item >Regular User</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-pink">Name(s):</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="input-signup"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Label className="text-pink">Name(s):</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="input-signup"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicSurnames">
          <Form.Label className="text-pink">Surname(s):</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="input-signup"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-pink">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            className="input-signup"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-pink">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-signup"
          />
        </Form.Group>

        <Button variant="primary" className="btn-signup mb-4"  >
          Sign Up
        </Button>{" "}

      </Form>
    </>
  );
}

export default Form_;
