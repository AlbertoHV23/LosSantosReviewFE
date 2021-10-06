import React from "react";
//My components
import Logo from "../../components/common/logo";
import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import Body from "../../components/main/Body";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "./Main.scss";


//Material UI & Bootstrap components

function Main() {
    return (
      <>
        <Header/>
        <Container>
          <Title title="New & Upcoming" class = "title"/>
          <Body/>
          <Title title="Most Popular" class = "title"/>
          <Body/>
          <Title title="Top Ratings" class = "title"/>
          <Body/>
          <Title title="Worst Ratings" class = "title"/>
          <Body/>
        </Container>
        <Footer/>

      </>
    );
  }
  
  export default Main;