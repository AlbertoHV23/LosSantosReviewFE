import React from "react";
//My components
import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import Body from "../../components/main/Body";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "./Main.scss";

<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function Main() {
    return (
      <>
        <Header/>
          <Container>
            <Title title="NEW & UPCOMING" class = "title"/>
            <Body/>
            <Title title="MOST POPULAR" class = "title"/>
            <Body/>
            <Title title="TOP RATINGS" class = "title"/>
            <Body/>
            <Title title="WORST RATINGS" class = "title"/>
            <Body/>
          </Container>
        <Footer/>

      </>
    );
  }
  
  export default Main;