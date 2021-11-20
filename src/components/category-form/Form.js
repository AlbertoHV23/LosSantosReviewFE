import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import EditIcon from '@mui/icons-material/Edit';
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'



function FormCategory() {
    let Name; //Category
    let ClassName,ClassDescription; //Classification
    let SubCategory, uidCategory; //Subcategory
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

  
  const getCategorys = (e) =>{
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


  GetSession()
  getCategorys()
  
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

    const CategoryHandler = (e) =>{ Name = e.target.value }
    const ClassficationHandler = (e) =>{ ClassName = e.target.value}
    const ClasDescriptionHandler = (e) =>{ ClassDescription = e.target.value}
    const SubCategoryHandler = (e) =>{ SubCategory = e.target.value}
    const DropdownCategoryHandler = (e) =>{ uidCategory = e.value }

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
          alert("The information was successfully updated.");
          window.location.reload(false);
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
          alert("The information was successfully updated.");
          window.location.reload(false);
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
    const SubCategorySubmit = (e) => {
        axios({
            method: "post",
            url: `https://lossantos-api.herokuapp.com/api/subcategory/`,
            headers: {
              "x-token": token
            },
            data: {
              'name': SubCategory,
              'category': uidCategory,
            },
          })
          .then((res) => {
            console.log(res.data);
            alert("The information was successfully updated.");
            window.location.reload(false);
            
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

                    <Button className="comment-icon editable m-4" href="/edit-category"><EditIcon/> Edit Category</Button>
                    <Button variant="primary" className="button submit margin "   onClick={CategorySubmit} >ADD</Button>

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
                      <Select options={Categories} styles={styles} placeholder ="Choose a category" onChange={DropdownCategoryHandler}/>

                    </Form.Group>
                    


                    <Form.Group as={Col} controlId="formGridState" >
                      <Form.Label>Subcategory Name</Form.Label>
                      <Form.Control placeholder="Enter SubCategory Name" onChange={SubCategoryHandler}></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button className="comment-icon editable m-4" href="/edit-category"><EditIcon/> Edit SubCategory</Button>
                    <Button variant="primary" className="button submit margin"  onClick={SubCategorySubmit}>ADD</Button>
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
                    <Button className="comment-icon editable m-4" href="/edit-category"><EditIcon/> Edit Classification</Button>
                    <Button variant="primary" className="button submit margin" onClick={ClassficationSubmit}>ADD</Button>
                </div>
            </Form>
        </>
     );
}

export default FormCategory;