import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";


function ProfileForm() {
  let  username,name,lastname,email,role,UID;
  const GetSession = (e) =>{
    window.localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    username = user.data.newUser.username
    name = user.data.newUser.name
    lastname = user.data.newUser.lastName
    email = user.data.newUser.email
    role = user.data.newUser.role
    UID = user.data.newUser.uid
    console.log(UID)
  }
  const NameHandler = (e) =>{
    name = e.target.value
  }

  const LastNameHandler = (e) =>{
    lastname = e.target.value
  }


  const Submit = (e) =>{
    axios.put(`https://lossantos-api.herokuapp.com/api/user/`+ UID,{
      name,
      lastname
    })
    .then(res => {
      console.log(res.data)

    })
    .catch(err => {
      const errorMsg =JSON.parse(err.request.response) ;

      if(errorMsg.errors != null){
        errorMsg.errors.forEach(e => {
      
          alert(e.msg);
  
        });
      }
      else{
        alert("Wrong")
      }


    })

  }

  GetSession()

  return (
    <>
      <Form className="form-login">
      <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue" >Name(s):</Form.Label >
          <Form.Control
            type="text"
            className="input-login"
            placeholder = {name}
            onChange= {NameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Surnames(s):</Form.Label>
          <Form.Control
            type="text"
            className="input-login"
            placeholder ={lastname}
            onChange= {LastNameHandler}

          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Username):</Form.Label>
          <Form.Control
            type="text"
            className="input-login"
            placeholder ={username}
          />
        </Form.Group>
        
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            className="input-login"
            placeholder ={email}
          />
        </Form.Group>

      

        
      

        <Button variant="primary" className="btn-login mb-4"
        onClick= {Submit}>Save</Button>

     
      </Form>
    </>
  );
}

export default ProfileForm;
