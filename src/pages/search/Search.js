import React from "react";
//My components
import Title from "../../components/common/Title";
import Header from "../../components/main/Header";
import Body from "../../components/search/Body";
import Footer from "../../components/main/Footer";
import { Container } from "react-bootstrap";

import "../main/Main.scss"
import "./Search.scss";

<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>

//Material UI & Bootstrap components

function Search() {
    return (
      <>
        <Header/>
        <Container>
          <Title title="Movies" class = "title"/>
          <Body/>
          <Title title="Series" class = "title"/>
          <Body/>
          <Title title="Videogames" class = "title"/>
          <Body/>
        </Container>
        <Footer/>

      </>
    );
  }
  
  export default Search;