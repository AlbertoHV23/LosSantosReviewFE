import { Dropdown, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { Component } from 'react'
import Select from 'react-select'

function Form_() {

  let roles = [];

  const getRoles = (e) =>{
    axios.get(`https://lossantos-api.herokuapp.com/api/role`,{roles})
    .then(res => {

      res.data.roles.forEach(element => {
        roles.push({
          value: element.id,
          label: element.name});
      })

      console.log(roles)
        
      
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

  getRoles()

  return (
    <>
      <Form className="form-signup">
        <Form.Group className="mb-4" controlId="formBasicDropdown">
          <Form.Label className="text-pink">Rol:</Form.Label>
          <Select options={roles} />
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

        <Button variant="primary" className="btn-signup mb-4">
          Sign Up
        </Button>{" "}

      </Form>
    </>
  );
}

export default Form_;
