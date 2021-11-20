import React from "react";
//My components
// import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import FormContent from "../../components/content-form/Form";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";
import "./ContentForm.scss";

<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function ContentForm() {
    return (
      <>
        <Header/>
        <Container>
          <FormContent/>
        </Container>
        <Footer/>
      </>
    );
  }
  
  export default ContentForm;