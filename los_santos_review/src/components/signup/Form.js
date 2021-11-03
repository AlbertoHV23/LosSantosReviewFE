import { Dropdown, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { Component } from 'react'
import Select from 'react-select'

function Form_() {

  let roles = [];
  let role,username, name, lastName, email, password;

  const RoleHandler = (e) =>{
    role = e.value 
    console.log(role)
  }

  const UsernameHandler = (e) =>{
    username = e.target.value
    console.log(username)
  }

  const NameHandler = (e) =>{
    name = e.target.value
    console.log(name)
  }

  const SurnameHandler = (e) =>{
    lastName = e.target.value
    console.log(lastName)
  }
  
  
  const EmailHandler = (e) =>{
    email = e.target.value
    console.log(email)
  }
  

  const PasswordHandler = (e) =>{
    password = e.target.value
    console.log(password)
  }

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

  
  const Submit = (e) =>{
    axios.post(`https://lossantos-api.herokuapp.com/api/user/`,{
      name,
      lastName,
      username,
      email,
      password,
      role
    })
    .then(res => {

      //const {}
    
      window.localStorage.setItem(
        'user' , JSON.stringify(res)
      )
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user);

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
        alert("Something went wrong")
      }


    })

  }

  return (
    <>
      <Form className="form-signup">
        <Form.Group className="mb-4" controlId="formBasicDropdown">
          <Form.Label className="text-pink">Rol:</Form.Label>
          <Select options={roles} onChange={RoleHandler} />
          
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-pink">Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="input-signup"
            onChange={UsernameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Label className="text-pink">Name(s):</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="input-signup"
            onChange={NameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicSurnames">
          <Form.Label className="text-pink">Lastname(s):</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="input-signup"
            onChange={SurnameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-pink">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            className="input-signup"
            onChange={EmailHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-pink">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            className="input-signup"
            onChange={PasswordHandler}
          />
        </Form.Group>

        <Button variant="primary" className="btn-signup mb-4" onClick={Submit}>
          Sign Up
        </Button>{" "}

      </Form>
    </>
  );
}

export default Form_;
