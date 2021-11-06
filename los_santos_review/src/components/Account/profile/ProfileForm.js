import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

function ProfileForm() {
  let username, name, lastName, email, role, uid, token;
  const GetSession = (e) => {
    window.localStorage.getItem("user");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    username = user.data.newUser.username;
    name = user.data.newUser.name;
    lastName = user.data.newUser.lastName;
    email = user.data.newUser.email;
    role = user.data.newUser.role;
    uid = user.data.newUser.uid;
    token = user.data.token;

    console.log(token);
  };
  const NameHandler = (e) => {
    name = e.target.value;
  };

  const LastNameHandler = (e) => {
    lastName = e.target.value;
  };

  const Submit = (e) => {
    axios({
      method: "put",
      url: `https://lossantos-api.herokuapp.com/api/user/`+uid,
      headers: {
        "x-token": token
      },
      data: {
        uid,
        name,
        lastName,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        const errorMsg = JSON.parse(err.request.response);

        if (errorMsg.errors != null) {
          errorMsg.errors.forEach((e) => {
            alert(e.msg);
          });
        } else {
          alert("Something went wrong, please try again.");
        }
      });
  };

  const Delete = (e) => {
    
    localStorage.clear()

    axios({
      method: "delete",
      url: `https://lossantos-api.herokuapp.com/api/user/`+uid,
      headers: {
        "Access-Control-Allow-Headers" : "*",
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : 'Bearer' + token,
        "x-token": token

      },
      data: {
        uid
      },
    })
      .then((res) => {
        console.log(res.data);
        console.log("Account deleted")

        window.location = "login"
      })
      .catch((err) => {
        const errorMsg = JSON.parse(err.request.response);
        

        if (errorMsg.errors != null) {
          errorMsg.errors.forEach((e) => {
            alert(e.msg);
          });
        } else {
          alert("Something went wrong, please try again.");
          
        }
      });
  };

  GetSession();

  return (
    <>
      <Form className="form-login">
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Name(s):</Form.Label>
          <Form.Control
            type="text"
            className="input-login"
            placeholder={name}
            onChange={NameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Surnames(s):</Form.Label>
          <Form.Control
            type="text"
            className="input-login"
            placeholder={lastName}
            onChange={LastNameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-blue">Username):</Form.Label>
          <Form.Control
            type="text"
            className="input-login"
            placeholder={username}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-blue">Email:</Form.Label>
          <Form.Control
            type="email"
            className="input-login"
            placeholder={email}
          />
        </Form.Group>

        <Button variant="primary" className="btn-login mb-4" onClick={Submit}>
          Save
        </Button>

        <Button variant="danger" className="btn-login btn-delete mb-4" onClick={() => { if (window.confirm('Are you sure you wish to delete your account?')) Delete() }}>
          Delete Account
        </Button>
      </Form>

      
    </>
  );
}

export default ProfileForm;
