import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { FormControl } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "../common/logo";
import { Search } from "@mui/icons-material";

function Header() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container className = "space">
              <Navbar.Brand href="#home">
                <Logo  className="d-inline-block align-top"/>
              </Navbar.Brand>
              <Search className="icon"/>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search something" 
                  className="me-2 search"
                  aria-label="Search"
                />
              </Form>
              <Nav>
                <Nav.Link className="links" href="#home">Movies</Nav.Link>
                <Nav.Link className="links" href="#features">Series</Nav.Link>
                <Nav.Link className="links" href="#pricing">Videogames</Nav.Link>
                <Nav.Link className="links" href="#account">Account</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
     );
}

export default Header;