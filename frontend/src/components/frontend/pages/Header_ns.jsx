// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header_ns= () => {
  return (
    <section className='nosticky'>
    <header>
      <Navbar
        expand="lg"
        fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/WHS Logo.png" alt="logo" height={55} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Our Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="#floating-terminal">Floating Terminal (WHS Iskandar 1)</NavDropdown.Item>
                <NavDropdown.Item href="#ocean-flow-1">Floating Crane - Ocean Flow 1</NavDropdown.Item>
                <NavDropdown.Item href="#ocean-flow-3">Floating Crane - Ocean Flow 3</NavDropdown.Item>
                <NavDropdown.Item href="#padmasari">Floating Crane - Padmasari</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#tug-barge">Tug and Barge (Prime Series)</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
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
