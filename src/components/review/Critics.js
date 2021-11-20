import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import Image from "../common/Image"
// import Logo from "../common/logo";
import Title from "../common/Title";
import Button from "@mui/material/Button";
import { Card } from "react-bootstrap";
import Profile from "../common/Profile";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Form } from "react-bootstrap";
import SliderBar from "../common/Slider";
import axios from "axios";
import { Reviews } from "@mui/icons-material";


function Critics() {
    let username, name, lastName, email, role, uid, token;
    let comment;
    let Review;
    let Comentarios = [];
    Review = JSON.parse(localStorage.getItem("reviewId"));

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
  
    };
    
    const CommentHandler = (e) => {
        comment = e.target.value;
      };
    
      const Submit = (e) => {
        SubmitComment();
        SubmitRate();
      };



    const SubmitComment = (e) => {
        axios({
          method: "POST",
          url: `https://lossantos-api.herokuapp.com/api/coment/`,
          headers: {
            "x-token": token
          },
          data: {
            'user': uid,
            'coment':comment,
            'review': Review.uid,
          },
        })
        .then((res) => {
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

      const SubmitRate = (e) => {
        const score = JSON.parse(localStorage.getItem("rate"));

        axios({
          method: "POST",
          url: `https://lossantos-api.herokuapp.com/api/rating`,
          headers: {
            "x-token": token
          },
          data: {
            'score': score,
            'content':Review.uid,
            'user': uid,
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

      const getComments = (e) => {
        console.log(Review.uid)
        axios
          .get(`https://lossantos-api.herokuapp.com/api/coment/`+ Review.uid)
          .then((res) => {
            console.log(res.data);
            //  window.localStorage.setItem(
            //   "",
            //   JSON.stringify(res.data.reviews)
            // );
            setText(res.data.comments)
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
      function setText(parametro){
        Comentarios = parametro
      }

      GetSession();
      // getComments();
      // console.log(Comentarios)
     
    
    return (
        <>
        <Row>
            <Col xs={2} md={2}>
                <Title title="CRITIC REVIEW" class = "title"/>
            </Col>
            <Col xs={10} md={10}>
                <hr className = "line"/>
            </Col>
        </Row>

        <Row>
            <Col>
              <div className="filter">
                  <a href="All">
                      <h6>All</h6>
                  </a>
                  <a href="Top Critics">
                      <h6>Top Critics</h6>
                  </a>
                  <a href="Fresh">
                      <h6>Fresh</h6>
                  </a>
              </div>
            </Col>
            <Col>
                <div className="right">
                <Button variant="primary" className="button-comment">COMMENT</Button>{' '}
                {/*
                <Button variant="primary" className="button-rate">RATE</Button>{' '}
                */}
                </div>
            </Col>
        </Row>

        <Row>
            <Form>
                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control as="textarea" placeholder="Please share your opinion" rows={3} onChange = {CommentHandler} />
                    </Form.Group>

                </Row>

                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Rate</Form.Label>
                      <SliderBar/>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick = {Submit}>SUBMIT</Button>
                </div>
            </Form>
        </Row>

        {/*

        <Row>
            <Form>
                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Rate</Form.Label>
                      <SliderBar/>
                    </Form.Group>
                </Row>
                


                <div className="right">
                    <Button variant="primary" className="button submit margin" type="submit">SUBMIT</Button>
                </div>
            </Form>
        </Row>

        */}

{Comentarios.map(function (d, idx) {
          return (
            <Col xs={12} md={12}>
            <Card className="mb-4 mt-4 comment">
                <Card.Header className="d-flex">
                    <div className="pic">
                        <Profile/>
                    </div>
                    <div>
                        <h3 className="user">Gordon Ramsay</h3>
                        <h3>Owner of Creative Ltd.</h3>
                    </div>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                  <Card.Text className="center">
                    Score: 77%
                  </Card.Text>
                </Card.Body>
            </Card>

        </Col>
          );
        })}
       

        

        </>
     );
}

export default Critics;