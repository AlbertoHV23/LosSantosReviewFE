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
import { useState } from "react";
import { Rating } from "@mui/material";

function FormReview() {
    let username, name, lastName, email, role, uid, token; // SESSION VARS
    let title, subtitle, body; // SESSION VARS
    let rating = window.localStorage.getItem("rate");; // RATING VARS
    let ContentsDropdown = [];
    let CONTENTS = [];
    let SelectedContent;

    let Reviews = [];
    let content_id,review_title,review_sub,review_desc, user;

    const [reviewId, setstateReviewId] = useState();
    const [reviewTitle, setstateReviewTitle] = useState();
    const [reviewSubtitle, setstateReviewSubtitle] = useState();
    const [reviewDesc, setstateReviewDesc] = useState();
    const [reviewCalification, setstate] = useState();



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

    const getReviews = (e) =>{
        axios.get(`https://lossantos-api.herokuapp.com/api/review`)
        .then(res => {
            console.log(res.data)
            res.data.reviews.forEach(element => {
                Reviews.push({
                  value: element.uid,
                  label: element.title});

                  if(element.uid == reviewId ){
                    setstateReviewTitle(element.title)
                    setstateReviewSubtitle(element.subtitle)
                    setstateReviewDesc(element.body)
                    review_title = element.title
                    review_sub = element.subtitle
                    review_desc = element.body
                    content_id = element.content
                    user = element.user
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

    getReviews()

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
      
      const ratingHandler = (e) => { rating = e.target.value};
      const titleHandler = (e) => { title = e.target.value};
      const subtitleHandler = (e) => { subtitle = e.target.value};
      const bodyHandler = (e) => { body = e.target.value};
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
      
      const Submit = (e) => { 
        rating = window.localStorage.getItem("rate");
    
        SubmitRating()
        SubmitReview()
      };

      const SubmitRating = (e) => {
        console.log(rating)
        console.log(SelectedContent.uid)
        console.log(uid)
        axios({
          method: "post",
          url: `https://lossantos-api.herokuapp.com/api/rating/`,
          headers: {
            "x-token": token
          },
          data: {
            'score':rating,
            'content': SelectedContent.uid,
            'user': uid
          },
        })
          .then((res) => {
            console.log(res.data);
           alert("The information was successfully updated.");

  
          })
          .catch((err) => {
            const errorMsg = JSON.stringify(err.request.response);
            alert(errorMsg);
          });
      };

      const SubmitReview = (e) => {
        axios({
          method: "post",
          url: `https://lossantos-api.herokuapp.com/api/review/`,
          headers: {
            "x-token": token
          },
          data: {
            'title':title,
            'subtitle': subtitle,
            'body': body,
            'content': SelectedContent.uid,
            'user': uid
          },
        })
          .then((res) => {
            console.log(res.data);
           alert("The information was successfully updated.");

  
          })
          .catch((err) => {
            const errorMsg = JSON.stringify(err.request.response);
            alert(errorMsg);
          });
      };

      const ReviewHandler = (e) =>{
        setstateReviewId(e.value)
      }

      const EditTitleHandler = (e) =>{
        review_title = e.target.value;
      }
      const EditSubtitleHandler = (e) =>{
        review_sub = e.target.value;
      }
      const EditDescHandler = (e) =>{
        review_desc = e.target.value;
      }

      const EditReview = (e) => {
        axios({
          method: "put",
          url: `https://lossantos-api.herokuapp.com/api/review/`+ reviewId,
          headers: {
            "x-token": token
          },
          data: {
            "title" : review_title,
            "subtitle" : review_sub,
            "body" : review_desc,
            'content' : content_id,
            'user' : user
          },
        })
          .then((res) => {
            console.log(res.data);
    
            window.location = "review-form"
    
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
        url: `https://lossantos-api.herokuapp.com/api/review/`+ reviewId,
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

    return (
        <>

        <Row>
            <Title title="Review" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Content</Form.Label>
                      <Select options={ContentsDropdown} styles={styles} placeholder ="Choose Content to Review" onChange={DropdownCategoryHandler}  />

                      {/* <Form.Select defaultValue="Choose Content to Review">
                        <option>The last of us  II</option>
                        <option>God Of War</option>
                      </Form.Select> */}
                        <div className="right mt-2">
                            <Button className="comment-icon editable" href="/content-form" ><EditIcon/> Edit Content</Button>
                        </div> 
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="Enter Review Title" onChange={titleHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle" >
                      <Form.Label>Subtitle</Form.Label>
                      <Form.Control placeholder="Enter Review Subtitle" onChange={subtitleHandler} />
                    </Form.Group>
                </Row>

            
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Los Santos Review</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={bodyHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Rating </Form.Label>
                     <SliderBar/>
                </Form.Group>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick = {Submit}>ADD</Button>
                </div>
            </Form>

        <Row>
            <Title title="Edit Review" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mt-3 mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Select Review</Form.Label>
                      <Select options={Reviews} styles={styles} placeholder ="Choose Review" onChange={ReviewHandler}  />
                    </Form.Group>
                </Row>
              

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="Enter Review Title" onChange={EditTitleHandler} defaultValue={reviewTitle}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle" >
                      <Form.Label>Subtitle</Form.Label>
                      <Form.Control placeholder="Enter Review Subtitle" onChange={EditSubtitleHandler} defaultValue={reviewSubtitle}/>
                    </Form.Group>
                </Row>

            
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Los Santos Review</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={EditDescHandler} defaultValue={reviewDesc}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Rating </Form.Label>
                     <SliderBar/>
                </Form.Group>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick = {EditReview}>EDIT</Button>
                    <Button variant="primary" className="button submit delete" onClick = {Delete}>DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormReview;