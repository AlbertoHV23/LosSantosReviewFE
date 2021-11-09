import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";



function FormCategory() {
    let Name; //Category
    let ClassName,ClassDescription; //Classification
    let username, name, lastName, email, role, uid, token; // SESSION VARS

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

  GetSession()

    const CategoryHandler = (e) =>{ Name = e.target.value }
    const ClassficationHandler = (e) =>{ ClassName = e.target.value}
    const ClasDescriptionHandler = (e) =>{ ClassDescription = e.target.value; console.log(ClassDescription)}

    const CategorySubmit = (e) => {
        axios({
          method: "post",
          url: `https://lossantos-api.herokuapp.com/api/category/`,
          headers: {
            "x-token": token
          },
          data: {
            'name': Name
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
    const ClassficationSubmit = (e) => {
        axios({
          method: "post",
          url: `https://lossantos-api.herokuapp.com/api/classification/`,
          headers: {
            "x-token": token
          },
          data: {
            'name': ClassName,
            'description': ClassDescription,
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
 
    return (
        <>

        <Row>
            <Title title="Category" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="Enter Category Name"
                      onChange={CategoryHandler}
                      ></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                      
                    <Button variant="primary" className="button submit margin"   onClick={CategorySubmit} >SAVE</Button>
                    <Button variant="primary" className="button submit delete">DELETE</Button>
                </div>
            </Form>

        <Row>
            <Title title="Subcategory" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Category</Form.Label>
                      <Form.Select defaultValue="Choose Content to Review">
                      <option hidden selected>Choose Category</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Subcategory Name</Form.Label>
                      <Form.Control placeholder="Enter SubCategory Name"></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" >SAVE</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>

        <Row>
            <Title title="Classification" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Classification Name</Form.Label>
                      <Form.Control placeholder="Enter Classification Name" onChange ={ClassficationHandler}></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange = {ClasDescriptionHandler} />
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={ClassficationSubmit}>SAVE</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormCategory;