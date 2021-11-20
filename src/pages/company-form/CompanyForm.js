import React from "react";
//My components
// import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import FormCompany from "../../components/company-form/Form";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss";


<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function CompanyForm() {
    return (
      <>
        <Header/>
        <Container>
            <FormCompany/>
        </Container>
        <Footer/>
      </>
    );
  }
  
  export default CompanyForm;