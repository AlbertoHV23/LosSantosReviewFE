import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Title from "../common/Title";
import Button from "@restart/ui/esm/Button";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";


function Info() {
    
    const content = localStorage.getItem("contentUID")
    const contents = JSON.parse(localStorage.getItem("content"));
    let Selectedcontent;

    contents.forEach(element => {
        if(element.uid == content){
            Selectedcontent = element;
        }
    });

    const getReviwes = (e) => {
        axios
          .get(`https://lossantos-api.herokuapp.com/api/review`)
          .then((res) => {
             window.localStorage.setItem(
              "reviews",
              JSON.stringify(res.data.reviews)
            );
          })
          .catch((err) => {
            const errorMsg = JSON.parse(err.request.response);
    
            if (errorMsg.errors != null) {
              errorMsg.errors.forEach((e) => {
                alert(e.msg);
              });
            } else {
              alert("Wrong email or password");
            }
          });
      };

    getReviwes()
        const Reviews = JSON.parse(localStorage.getItem("reviews"));
      let SelectedReviews;
  
      Reviews.forEach(element => {
          if(element.content._id == content){
            SelectedReviews = element;
            window.localStorage.setItem(
                "reviewId",
                JSON.stringify(SelectedReviews)
              );
          }
      });

      if(SelectedReviews == null){
        SelectedReviews = []

      }
    
    return (
        <>
        <Row>
            <Col xs={2} md={1}>
                <Title title="SUMMARY" class = "title info center"/>
            </Col>
            <Col xs={10} md={11}>
                <hr className = "line pad"/>
            </Col>
        </Row>

        <div>
            <div className="right">
                <Button className="comment-icon editable mb-3" href="/content-form"><EditIcon/> Edit Content</Button>
            </div>    
            <br/>
            <p>{Selectedcontent.description}</p>

            <br/>

            <Row>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Rating</h2> 
                    <h3>{Selectedcontent.classification.name} </h3>
                </Col>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Category</h2> 
                    <h3>{Selectedcontent.category.name} </h3>
                </Col>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Subcategory</h2> 
                    <h3>{Selectedcontent.subcategory.name}  </h3>
                </Col>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Company</h2> 
                    <h3>{Selectedcontent.company.name} </h3>
                </Col>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Released Date</h2> 
                    <h3>{Selectedcontent.realiseDate.substring(0, 10)}</h3>
                </Col>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Duration</h2> 
                    <h3>{Selectedcontent.duration} min</h3>
                </Col>
            </Row>

        

        </div>

        <Row>
            <Col xs={2} md={3}>
                <Title title="LOS SANTOS REVIEW" class = "title "/>
            </Col>
            <Col xs={10} md={9}>
                <hr className = "line"/>
            </Col>
        </Row>
        

        <div>
            <div className="right mb-0">
                <Button className="comment-icon editable mb-3"  href="/review-form"><EditIcon/> Edit Review</Button>
                <h3>Released Date: {Selectedcontent.realiseDate.substring(0, 10)}</h3>
            </div>    
        
            <Title title={SelectedReviews.title} class = "title-review"/>
            <Title title={SelectedReviews.subtitle} class = "title"/>
            
            <p>{SelectedReviews.body}</p>

            <br/>


        </div>




        </>
     );
}

export default Info;