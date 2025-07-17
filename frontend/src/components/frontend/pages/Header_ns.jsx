// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom"

const Header_ns = () => {
  const navigate = useNavigate();

  return (
    <section className="nosticky">
      <header>
        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img src="/images/WHS Logo.png" alt="logo" height={55} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <NavDropdown title="Our Service" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate('/floatingTerminal')}>
                    Floating Terminal (WHS Iskandar 1)
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/oceanFlow1')}>
                    Floating Crane - Ocean Flow 1
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/oceanFlow3')}>
                    Floating Crane - Ocean Flow 3
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/padmasari')}>
                    Floating Crane - Padmasari
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/tbSeries')}>
                    Tug and Barge (Prime Series)
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate('/gallery')}>Gallery</Nav.Link>
                 <Nav.Link onClick={() => navigate('/contact_us')}>Contact Us</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#exdoma">Exdoma</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </section>
  );
};

export default Header_ns;
