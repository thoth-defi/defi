

import React from 'react';
import { Button } from 'react-bootstrap';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = ()=>{
  return(
      <Navbar className= 'mt-5 p-3 ml-5 mr-5' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Button variant="outline-secondary">Launch App</Button>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  
}

export default NavBar;