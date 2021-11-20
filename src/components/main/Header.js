import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
// import Button from "@restart/ui/esm/Button";
import { FormControl } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "../common/logo";
import { Search } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Header() {
    const history = useHistory();
    const routeChange = (ruta) => {
    let path = 'myaccount';
    history.push(path);
    };
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container className = "space">
              <Navbar.Brand href="/main">
                <Logo  className="d-inline-block align-top" class="logo-main"/>
              </Navbar.Brand>
              <Search className="icon"/>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search something" 
                  className="me-2 search"
                  aria-label="Search"
                  href="/search"
                />
              </Form>
              <Nav>
                <Nav.Link className="links" href="#home">Movies</Nav.Link>
                <Nav.Link className="links" href="#home">Series</Nav.Link>
                <Nav.Link className="links" href="#home">Videogames</Nav.Link>
                <Nav.Link className="links" onClick={routeChange}>Account</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Create
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/category-form">Category</Dropdown.Item>
                    <Dropdown.Item href="/category-form">Classification</Dropdown.Item>
                    <Dropdown.Item href="/company-form">Company</Dropdown.Item>
                    <Dropdown.Item href="/content-form">Content</Dropdown.Item>
                    <Dropdown.Item href="/review-form">Review</Dropdown.Item>
                    <Dropdown.Item href="/role-form">Role</Dropdown.Item>
                    <Dropdown.Item href="/category-form">Subcategory</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Container>
          </Navbar>
        </>
     );
}

export default Header;