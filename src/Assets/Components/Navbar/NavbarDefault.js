import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const NavbarDefault = () => {
  const [first, setfirst] = useState("");
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [akuganteng, setAkuganteng] = useState(false);
  const [looping, setlooping] = useState(false)

  useEffect(() => {
    LoadAwal()
  }, [document.location.pathname])

  const LoadAwal = () => {
    let herf = document.location.pathname;
    if (herf === "/") {
      setHome(true);
    } else if (herf === "/about") {
      setAbout(true);
    } else if (herf === "/akuganteng") {
      setAkuganteng(true);
    } else if (herf === "/looping") {
      setlooping(true);
    }
  };

  return (
    <div>
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Aku gantenhg</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" active={home}>
                Home
              </Nav.Link>
              <a href="akuganteng" >akuganteng</a>
              <Nav.Link href="about" active={about}>
                about
              </Nav.Link>
              <Nav.Link href="akuganteng " active={akuganteng}>Contact Us</Nav.Link>
              <Nav.Link href="looping " active={looping}>Contact Us</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
