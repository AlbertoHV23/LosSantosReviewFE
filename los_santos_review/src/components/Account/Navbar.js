import { Avatar } from "@mui/material";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../common/logo";

function NavbarAccount() {
  let  username;
  const GetSession = (e) =>{
    window.localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'))
    username = user.data.newUser.username
  }

  const ClearStorage = (e) =>{
    localStorage.clear()
    window.localStorage.setItem(
      'user' , "No session"
    )
    let vari = window.localStorage.getItem('user')
    console.log(vari)
  }

  GetSession()
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/main">
          <Logo className="d-inline-block align-top" class="logo-navbar ml" />
        </Navbar.Brand>

        <Nav  className="justify-content-end mr" style={{ width: "100%" }}>
          <Avatar
            alt="Avatar"
            src= {`${process.env.PUBLIC_URL}/assets/img/avatars/Alberto.jpg`}
            sx={{ width: 37, height: 37 }}
          />
          <NavDropdown title={username} id="collasible-nav-dropdown" className="ml-4">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item> */}
            <NavDropdown.Item href="/Security">Security</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login" onClick={ClearStorage}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarAccount;
