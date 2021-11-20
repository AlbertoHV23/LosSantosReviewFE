import React, {useState} from "react";
import { InputGroup, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'
import { Delete } from "@mui/icons-material";

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

  const [catId ,setValueCatId] = useState();
  const [catName ,setValueCatName] = useState();

  const [ subId, setValueSubId ] = useState(); 
  const [ subName, setValueSubName ] = useState(); 
  const [ subCatId, setValueSubCatId ] = useState(); 

  const [ classId, setValueClassId ] = useState(); 
  const [ className, setValueClassName ] = useState(); 
  const [ classDesc, setValueDesc ] = useState(); 
  
  let category_name, subcategory_name, class_name, class_desc;
  let username, name, lastName, email, role, uid, token; // SESSION VARS
  let Categories = [];
  let Subcategories = [];
  let Classifications = [];

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

              if(element.uid == catId){
                setValueCatId(element.uid)
                setValueCatName(element.name)
              }
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

  const getSubCategories = (e) =>{

      axios.get(`https://lossantos-api.herokuapp.com/api/subcategory`)
      .then(res => {
          console.log(res.data)

          res.data.subcategories.forEach(element => {
                  Subcategories.push({
                  value: element.uid,
                  label: element.name});

                  if(element.uid == subId){
                    setValueSubId(element.uid)
                    setValueSubName(element.name)
                    setValueSubCatId(element.category._id)
                    subcategory_name = element.name
                  }
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

    getSubCategories()

    const getClassifications = (e) =>{

      axios.get(`https://lossantos-api.herokuapp.com/api/classification`)
      .then(res => {
          console.log(res.data)

          res.data.classifications.forEach(element => {
                  Classifications.push({
                  value: element.id,
                  label: element.name});

                  if(element.id == classId){
                    setValueClassName(element.name)
                    setValueDesc(element.description)

                    class_name = element.name
                    class_desc = element.description
                  }
                  
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

  getClassifications()

  const CategoryHandler = (e) =>{
    setValueCatId(e.value)
  }

  const CatNameHandler = (e) =>{ category_name = e.target.value}

  const EditCategory = (e) => {
    axios({
      method: "put",
      url: `https://lossantos-api.herokuapp.com/api/category/`+ catId,
      headers: {
        "x-token": token
      },
      data: {
        "name" : category_name
      },
    })
      .then((res) => {
        console.log(res.data);

        window.location = "edit-category"

        alert("The information was successfully updated.");
      })
      .catch((err) => {
        
        const errorMsg = JSON.stringify(err.request.response);
        alert(errorMsg);
      }); 
  };

  const DeleteCategory = (e) => {
  
    axios({
      method: "delete",
      url: `https://lossantos-api.herokuapp.com/api/category/`+ catId,
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
        console.log("Category deleted");
        alert("Category deleted successfully")

        window.location = "edit-category"
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

  const SubCategoryHandler = (e) =>{
   setValueSubId(e.value)
  }

  const SubCategorNameHandler = (e) =>{
     subcategory_name = e.target.value
  }

  const EditSubCategory = (e) => {
    axios({
      method: "put",
      url: `https://lossantos-api.herokuapp.com/api/subcategory/`+ subId,
      headers: {
        "x-token": token
      },
      data: {
        "name" : subcategory_name,
        "category" : subCatId
      },
    })
      .then((res) => {
        console.log(res.data);

        window.location = "edit-category"

        alert("The information was successfully updated.");
      })
      .catch((err) => {
        
        const errorMsg = JSON.stringify(err.request.response);
        alert(errorMsg);
      }); 
  };

  const DeleteSubcategory = (e) => {
  
    axios({
      method: "delete",
      url: `https://lossantos-api.herokuapp.com/api/subcategory/`+ subId,
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
        console.log("Category deleted");
        alert("Category deleted successfully")

        window.location = "edit-category"
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

  const ClassificationHandler = (e) =>{setValueClassId(e.value)}

  const ClassificatioNameHandler = (e) =>{class_name = e.target.value}
  const ClassificatioDescHandler = (e) =>{class_desc = e.target.value}

  const EditClassification = (e) => {
    axios({
      method: "put",
      url: `https://lossantos-api.herokuapp.com/api/classification/`+ classId,
      headers: {
        "x-token": token
      },
      data: {
        "name" : class_name,
        "description" : class_desc
      },
    })
      .then((res) => {
        console.log(res.data);

        window.location = "edit-category"

        alert("The information was successfully updated.");
      })
      .catch((err) => {
        
        const errorMsg = JSON.stringify(err.request.response);
        alert(errorMsg);
      }); 
  };

  const DeleteClassification = (e) => {
  
    axios({
      method: "delete",
      url: `https://lossantos-api.herokuapp.com/api/classification/`+ classId,
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
        console.log("Classification deleted");
        alert("Classification deleted successfully")

        window.location = "edit-category"
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
            <Title title="Edit Category" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Category</Form.Label>
                      <Select options={Categories} styles={styles} placeholder ="Choose a category" onChange={CategoryHandler}/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Edit Category Name</Form.Label>
                      <Form.Control placeholder="Enter New Category Name" defaultValue={catName} onChange={CatNameHandler}></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                      
                    <Button variant="primary" className="button submit margin" onClick={EditCategory}  >EDIT</Button>
                    <Button variant="primary" className="button submit delete" onClick={DeleteCategory}>DELETE</Button>
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
                      <Select options={Subcategories} styles={styles} placeholder ="Choose a Subcategory" onChange={SubCategoryHandler}/>

                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridState" >
                      <Form.Label>Edit Subcategory Name</Form.Label>
                      <Form.Control placeholder="Enter New SubCategory Name" onChange={SubCategorNameHandler} defaultValue={subName}></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={EditSubCategory}>EDIT</Button>
                    <Button variant="primary" className="button submit delete" onClick={DeleteSubcategory}>DELETE</Button>
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
                      <Select options={Classifications} styles={styles} placeholder ="Choose a classification" onChange={ClassificationHandler}/>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>New Classification Name</Form.Label>
                      <Form.Control placeholder="Enter Classification Name" onChange={ClassificatioNameHandler} defaultValue={className}></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>New Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={ClassificatioDescHandler} defaultValue={classDesc}/>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={EditClassification} >EDIT</Button>
                    <Button variant="primary" className="button submit delete" onClick={DeleteClassification} >DELETE</Button>
                </div>
            </Form>
        </>
    );
}

export default EditCategory;