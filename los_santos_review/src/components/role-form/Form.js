import React, {useState} from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'

function FormRole() {

    const [ roleId, setValue ] = useState(); 
    const [ roleName, setValue2 ] = useState(); 
    const [ roleDesc, setValue3 ] = useState(); 

    let role_selected, selected_name, selected_description;
    let role_name, role_description; // Role vars
    let username, name, lastName, email, role, uid, token; // SESSION VARS
    let Roles = [];

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

    GetSession();

    const getRoles = (e) =>{
        axios.get(`https://lossantos-api.herokuapp.com/api/role`)
        .then(res => {
            console.log(res.data.roles)
            res.data.roles.forEach(element => {
                Roles.push({
                  value: element.id,
                  label: element.name});

                if(element.id == role_selected){
                    console.log("found")
                    setValue(element.id)
                    setValue2(element.name)
                    setValue3(element.description)
                }
            }) 

        })
        .catch(err => {
          const errorMsg =JSON.parse(err.request.response);
    
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

    getRoles()

    const RoleHandler = (e) =>{
        role_selected = e.value
        getRoles()
    }

    const NameHandler = (e) =>{ role_name = e.target.value }
    const DescriptionHandler = (e) =>{ role_description = e.target.value}

    const SelectedNameHandler = (e) =>{selected_name = e.target.value}
    const SelectedDescriptionHandler = (e) =>{ selected_description = e.target.value}

    const Submit = (e) => {
        axios({
          method: "post",
          url: `https://lossantos-api.herokuapp.com/api/role/`,
          headers: {
            "x-token": token
          },
          data: {
            "name" : role_name,
            "description" : role_description
          },
        })
          .then((res) => {
            console.log(res.data);
            alert("The information was successfully updated.");
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

    const Edit = (e) => {
        axios({
          method: "put",
          url: `https://lossantos-api.herokuapp.com/api/role/`+ JSON.parse(localStorage.getItem("role_id")),
          headers: {
            "x-token": token
          },
          data: {
            "name" : selected_name,
            "description" : selected_description
          },
        })
          .then((res) => {
            console.log(res.data);
    
            window.location = "role-form"
    
            alert("The information was successfully updated.");
          })
          .catch((err) => {
            
            const errorMsg = JSON.stringify(err.request.response);
            alert(errorMsg);
          });
    };

    const Delete = (e) => {
  
      axios({
        method: "delete",
        url: `https://lossantos-api.herokuapp.com/api/role/`+ JSON.parse(localStorage.getItem("role_id")),
        headers: {
          "Access-Control-Allow-Headers" : "*",
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization' : 'Bearer' + token,
          "x-token": token
  
        },
      })
        .then((res) => {
          console.log(res.data);
          console.log("Role deleted");
          alert("Role deleted successfully")

          window.location = "role-form"
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

    return (
        <>
        <Row>
            <Title title="ADD ROLE" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Role Name</Form.Label>
                      <Form.Control placeholder="Enter Role Name" onChange={NameHandler}></Form.Control>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Role Description</Form.Label>
                      <Form.Control  as="textarea" rows={3} placeholder="Enter Description..." onChange={DescriptionHandler}></Form.Control>
                    </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={Submit}>ADD</Button>
                </div>
            </Form>

        <Row>
            <Title title="EDIT ROLE" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>

                <Row className="mb-3 mt-3"> 

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Select Role</Form.Label>
                  <Select options={Roles} styles={styles} placeholder ="Choose a role" onChange={RoleHandler}/>
                </Form.Group>
                </Row>


                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Role Name</Form.Label>
                      <Form.Control placeholder="Enter Role Name" onChange={SelectedNameHandler} defaultValue={roleName}></Form.Control>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Role Description</Form.Label>
                      <Form.Control  as="textarea" rows={3} placeholder="Enter Description..." onChange={SelectedDescriptionHandler} defaultValue={roleDesc}></Form.Control>
                    </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={Edit}>EDIT</Button>
                    <Button variant="primary" className="button submit delete" onClick={Delete}>DELETE</Button>
                </div>
            </Form>
            </>
     );
}

export default FormRole;