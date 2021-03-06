import React from "react";
//My components
// import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import FormReview from "../../components/review-form/Form";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";
import "./ReviewForm.scss";

<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function ReviewForm() {
    return (
      <>
        <Header/>
        <Container>
          <FormReview/>
        </Container>
        <Footer/>
      </>
    );
  }
  
  export default ReviewForm;