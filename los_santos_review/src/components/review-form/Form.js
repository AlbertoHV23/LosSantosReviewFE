import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import SliderBar from "../common/Slider";
import EditIcon from '@mui/icons-material/Edit';
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'

function FormReview() {
    let username, name, lastName, email, role, uid, token; // SESSION VARS
    let ContentsDropdown = [];
    let CONTENTS = [];
    let SelectedContent;

    const GetSession = (e) => {
        window.localStorage.getItem("user");
        const user = JSON.parse(localStorage.getItem("user"));
        username = user.data.newUser.username;
        name = user.data.newUser.name;
        lastName = user.data.newUser.lastName;
        email = user.data.newUser.email;
        role = user.data.newUser.role;
        uid = user.data.newUser.uid;
        token = user.data.token; 
      };

      const getContents = (e) =>{
        axios.get(`https://lossantos-api.herokuapp.com/api/content`)
        .then(res => {
            // console.log(res.data.contents);
            res.data.contents.forEach(element => {
                ContentsDropdown.push({
                  value: element.uid,
                  label: element.title
                });
                  
                  CONTENTS.push({
                    title: element.title,
                    description: element.description,
                    realiseDate: element.realiseDate,
                    trailerLink: element.trailerLink,
                    duration: element.duration,
                    category: element.category,
                    subcategory: element.subcategory,
                    company: element.company,
                    classification: element.classification,
                    uid: element.uid
                });
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
      getContents()

      console.log(CONTENTS)
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
    
      const DropdownCategoryHandler = (e) =>{ 
        //   uidCategory = e.value
         console.log(e.value);
         CONTENTS.forEach(element => { 

             if(element.uid == e.value ){
                 SelectedContent = element
                 console.log(SelectedContent)
                
             }
         })
         }
    
    return (
        <>

        <Row>
            <Title title="Review" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Content</Form.Label>
                      <Select options={ContentsDropdown} styles={styles} placeholder ="Choose Content to Review" onChange={DropdownCategoryHandler}  />

                      {/* <Form.Select defaultValue="Choose Content to Review">
                        <option>The last of us  II</option>
                        <option>God Of War</option>
                      </Form.Select> */}
                        <div className="right mt-1">
                            <Button className="comment-icon editable" href="/content-form"><EditIcon/> Edit Content</Button>
                        </div> 
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3">
                     
                    <Form.Group as={Col} controlId="formGridState">
                        <fieldset disabled>
                        <Form.Label>Category</Form.Label>
                        <Form.Control defaultValue="Content Category"></Form.Control>
                        <div className="right mt-1">
                            <Button className="comment-icon editable"  href="/category-form"><EditIcon/> Edit Category</Button>
                        </div>    
                        </fieldset>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <fieldset disabled>
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Control defaultValue="Content Subcategory"/>
                        <div className="right mt-1">
                            <Button className="comment-icon editable" href="/category-form"><EditIcon/> Edit Subcategory</Button>
                        </div> 
                        </fieldset>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                     
                     <Form.Group as={Col} controlId="formGridState">
                         <fieldset disabled>
                         <Form.Label>Classification</Form.Label>
                         <Form.Control defaultValue="Content Classification"></Form.Control>
                         <div className="right mt-1">
                             <Button className="comment-icon editable" href="/category-form"><EditIcon/> Edit Classification</Button>
                         </div>    
                         </fieldset>
                     </Form.Group>
 
                     <Form.Group as={Col} controlId="formGridState">
                         <fieldset disabled>
                         <Form.Label>Company</Form.Label>
                         <Form.Control defaultValue="Content Company"/>
                         <div className="right mt-1">
                             <Button className="comment-icon editable" href="/company-form"><EditIcon/> Edit Company</Button>
                         </div> 
                         </fieldset>
                     </Form.Group>
                 </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="Enter Review Title" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Subtitle</Form.Label>
                      <Form.Control placeholder="Enter Review Subtitle" />
                    </Form.Group>
                </Row>

            
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Los Santos Review</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Rating</Form.Label>
                    <SliderBar/>
                </Form.Group>

                <div className="right">
                    <Button variant="primary" className="button submit margin" type="submit">SUBMIT</Button>
                    <Button variant="primary" className="button submit delete" type="submit">DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormReview;