import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'

function EditCategory() {
  

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: "white",
      fontSize: state.selectProps.myFontSize
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "bold",
      color: "black",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
    //   borderRadius: "12px",
    //   borderColor: "#ff66c4",
    //   borderWidth: "3px"

    }),
   
  };

  let username, name, lastName, email, role, uid, token; // SESSION VARS
  let Categories = [];

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

  const getCategories = (e) =>{
    axios.get(`https://lossantos-api.herokuapp.com/api/category`)
    .then(res => {
        console.log(res.data.categories[0])
        res.data.categories[0].forEach(element => {
            Categories.push({
              value: element.uid,
              label: element.name});
          }) 
    })
    .catch(err => {
      const errorMsg =JSON.parse(err.request.response) ;

      if(errorMsg.errors != null){
        errorMsg.errors.forEach(e => {
        
          alert(e.msg);

        });
      }
      else{
        alert("Something went wrong, please try again.")
      }
    })
  }

  getCategories()

  return (
        <>

        <Row>
            <Title title="Edit Category" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Category</Form.Label>
                      <Select options={Categories} styles={styles} placeholder ="Choose a category"/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Edit Category Name</Form.Label>
                      <Form.Control placeholder="Enter New Category Name"></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                      
                    <Button variant="primary" className="button submit margin"  >SAVE</Button>
                    <Button variant="primary" className="button submit delete">DELETE</Button>
                </div>
            </Form>

        <Row>
            <Title title="Edit Subcategory" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>SubCategory</Form.Label>
                      <Select options={Categories} styles={styles} placeholder ="Choose a category"/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Edit Category</Form.Label>
                      <Select options={Categories} styles={styles} placeholder ="Choose a category"/>

                    </Form.Group>
                    


                    <Form.Group as={Col} controlId="formGridState" >
                      <Form.Label>Edit Subcategory Name</Form.Label>
                      <Form.Control placeholder="Enter New SubCategory Name" ></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin">SAVE</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>

        <Row>
            <Title title="Edit Classification" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Classification</Form.Label>
                      <Select options={Categories} styles={styles} placeholder ="Choose a category"/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>New Classification Name</Form.Label>
                      <Form.Control placeholder="Enter Classification Name" ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>New Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" >SAVE</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>
        </>
    );
}

export default EditCategory;