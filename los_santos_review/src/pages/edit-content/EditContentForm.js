import React from "react";
//My components
// import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import EditContent from "../../components/edit-content/Form";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";


<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function EditContentForm() {
    return (
      <>
        <Header/>
        <Container>
          <EditContent/>
        </Container>
        <Footer/>
      </>
    );
  }
  
  export default EditContentForm;