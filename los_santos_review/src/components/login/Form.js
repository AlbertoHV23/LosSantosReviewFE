import React from "react";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function Form_() {
  let email, password;
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

        <Button variant="primary" className="btn-login mb-4" onClick= {() => {
          axios.post(`https://lossantos-api.herokuapp.com/api/auth/login/`,{
            email,
            password
          })
          .then(res => {
            //const {}
            window.localStorage.setItem(
              'user' , JSON.stringify(res)
            )
            const user = JSON.parse(localStorage.getItem('user'))
            console.log(user);
          })
          
        }}>Log In</Button>{' '}

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
