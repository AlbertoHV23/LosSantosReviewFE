import { Avatar } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../common/logo";

function NavbarAccount() {
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Logo className="d-inline-block align-top" class="logo-navbar ml" />
        </Navbar.Brand>

        <Nav  className="justify-content-end mr" style={{ width: "100%" }}>
          <Avatar
            alt="Avatar"
            src= {`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
            sx={{ width: 37, height: 37 }}
          />
          <NavDropdown title="Alberto Hernandez" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Security</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarAccount;
