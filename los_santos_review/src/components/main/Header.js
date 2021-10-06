import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { FormControl } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "../common/logo";


function Header() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <Logo  className="d-inline-block align-top"/>
              </Navbar.Brand>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
              <Nav className="me-auto align-left">
                <Nav.Link href="#home">Movies</Nav.Link>
                <Nav.Link href="#features">Series</Nav.Link>
                <Nav.Link href="#pricing">Videogames</Nav.Link>
                <Nav.Link href="#account">Account</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
     );
}

export default Header;