import React, {useState} from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import EditIcon from '@mui/icons-material/Edit';
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'

function FormContent() {

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

    let title, description, date, duration, poster, trailer, category, subcategory, classification, company; // Content vars
    let username, name, lastName, email, role, uid, token; // SESSION VARS
    let Categories = [];
    let Subcategories = [];
    let Classifications = [];
    let Companies = [];

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
    const GetContent = (e) => {
      window.localStorage.getItem("content");
      const content= JSON.parse(localStorage.getItem("content"));
      console.log(content);
   

  };

    GetSession();
    // GetContent();


    const getCategories = (e) =>{
        axios.get(`https://lossantos-api.herokuapp.com/api/category`)
        .then(res => {
            console.log(res.data)

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

    const getSubCategories = (e) =>{
        
        axios.get(`https://lossantos-api.herokuapp.com/api/subcategory`)
        .then(res => {
            console.log(res.data)

            res.data.subcategories.forEach(element => {
                if(category == element.category){
                    Subcategories.push({
                    value: element.subcategories._id,
                    label: element.subcategories.name});
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

    const getClassifications = (e) =>{
        
        axios.get(`https://lossantos-api.herokuapp.com/api/classification`)
        .then(res => {
            console.log(res.data)

            res.data.classifications.forEach(element => {
                    Classifications.push({
                    value: element.id,
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

    getClassifications()

    const getCompanies = (e) =>{
        
        axios.get(`https://lossantos-api.herokuapp.com/api/company`)
        .then(res => {
            console.log(res.data)

            
            res.data.companies.forEach(element => {
                    Companies.push({
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

    getCompanies()

    const CategoryHandler = (e) =>{ 
    
        category = e.value
        getSubCategories()
        document.getElementById("subcategory").value = null;
    }

    const SubcategoryHandler = (e) =>{ subcategory = e.value;  console.log(subcategory)}
    const ClassificationHandler = (e) =>{ classification = e.value; console.log(classification) }
    const CompanyHandler = (e) =>{ company = e.value}
    const TitleHandler = (e) =>{ title = e.target.value;  console.log(title)}
    const DescriptionHandler = (e) =>{ description = e.target.value}
    const DateHandler = (e) =>{ date = e.target.value}
    const DurationHandler = (e) =>{ duration = e.target.value}
    const TrailerHandler = (e) =>{ trailer = e.target.value}

    const Submit = (e) => {
      trailer  = trailer.replace('watch?v=', 'embed/')
        axios({
          method: "POST",
          url: `https://lossantos-api.herokuapp.com/api/content/`,
          headers: {
            "x-token": token
          },
          data: {
            "title" : title,
            "description" : description,
            "trailerLink" : trailer,
            "duration" : duration,
            "category" : category,
            "subcategory" : subcategory,
            "company" : company,
            "classification" : classification
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

  //Variables y Funciones para subir imagenes
  const [file,setFile] = useState(null)

  const selectImage = (e) => {
    setFile(e.target.files[0])
  }

  const uploadImage = () => {
    if(!file){
      alert('You have not selected an image')
      return
    }

    const formData = new FormData()
    formData.append('archivo', file)

    fetch('https://lossantos-api.herokuapp.com/api/uploads/content/' + uid, {
      method: 'PUT',
      body: formData
    })
    .then(res=> res.text())
    .catch(err => {
      console.error(err)
    })

    setFile(null)
  }

    return (
        <>

        <Row>
            <Title title="Entertainment" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Content</Form.Label>
                      <Form.Control placeholder="Title" onChange={TitleHandler}></Form.Control>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3">
                     
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Select options={Categories} styles={styles} placeholder ="Choose Category" onChange={CategoryHandler} />
                        <div className="right mt-1">
                            <Button className="comment-icon editable" href="/edit-category"><EditIcon/> Edit Category</Button>
                        </div>    
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Subcategory</Form.Label>
                        <Select id={"subcategory"} options={Subcategories} styles={styles} placeholder ="Choose Subcategory" onChange={SubcategoryHandler}/>
                        <div className="right mt-1">
                            <Button className="comment-icon editable" href="/edit-category"><EditIcon/> Edit SubCategory</Button>
                        </div> 
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                     
                     <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Classification</Form.Label>
                         <Select options={Classifications} styles={styles} placeholder ="Choose Classification" onChange={ClassificationHandler}/>
                         <div className="right mt-1">
                             <Button className="comment-icon editable" href="/edit-category"><EditIcon/> Edit Classification</Button>
                         </div>    
                     </Form.Group>
 
                     <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Company</Form.Label>
                         <Select options={Companies} styles={styles} placeholder ="Choose a Company" onChange={CompanyHandler}/>
                         <div className="right mt-1">
                             <Button className="comment-icon editable" href="/edit-category"><EditIcon/> Edit Company</Button>
                         </div> 
                     </Form.Group>
                 </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3}  onChange={DescriptionHandler}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Released Date</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Realesed Date" onChange={DateHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control  type="number" placeholder="Enter minutes total" onChange={DurationHandler} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Poster</Form.Label>
                        <Form.Control onChange={selectImage} type="file" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Trailer Link</Form.Label>
                      <Form.Control placeholder="Enter link" onChange={TrailerHandler}/>
                    </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={Submit}>ADD</Button>
                </div>
            </Form>
        </>
     );
}

export default FormContent;