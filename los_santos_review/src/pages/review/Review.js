import React from "react";
//My components
import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import Score from "../../components/review/Score";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";
import "./Review.scss";

<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function Review() {
    return (
      <>
        <Header/>
        <Container>
            <Score/>
        </Container>
        <Footer/>
      </>
    );
  }
  
  export default Review;