import React from "react";
//My components
import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import Score from "../../components/review/Score";
import Info from "../../components/review/Info";
import Critics from "../../components/review/Critics";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";
import "./Review-form.scss";

<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function ReviewForm() {
    return (
      <>
        <Header/>
        <Container>

        </Container>
        <Footer/>
      </>
    );
  }
  
  export default ReviewForm;