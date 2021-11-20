import React from "react";
//My components
// import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import EditCategory from "../../components/edit-category/Form";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";


<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function EditCategoryForm() {
    return (
      <>
        <Header/>
        <Container>
          <EditCategory/>
        </Container>
        <Footer/>
      </>
    );
  }
  
  export default EditCategoryForm;