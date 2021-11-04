import React from "react";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function Form_() {
  let email, password;

  const EmailHandler = (e) =>{
    email = e.target.value
  }
  
  const PasswordHandler = (e) =>{
    password = e.target.value
  }

  const Submit = (e) =>{
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
      window.location = "main"

    })
    .catch(err => {
      const errorMsg =JSON.parse(err.request.response) ;

      if(errorMsg.errors != null){
        errorMsg.errors.forEach(e => {
      
          alert(e.msg);
  
        });
      }
      else{
        alert("Wrong email or password")
      }


    })

  }

  return (

    <>

      <Form className="form-login">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            className="input-login"
            onChange={EmailHandler}
          />

        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-login"
            onChange={PasswordHandler}
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

        <Button variant="primary" className="btn-login mb-4" onClick= {Submit}>Log In</Button>{' '}


        <GoogleButton className="btn-login" type="light"
          onClick={() => {
          }}
        />
      </Form>
    </>
  );
}

export default Form_;
