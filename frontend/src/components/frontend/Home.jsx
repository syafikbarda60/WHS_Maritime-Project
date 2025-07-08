    //import React from 'react'
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import Container from 'react-bootstrap/Container';
    import Card from 'react-bootstrap/Card';
    import Button from 'react-bootstrap/Button';
    import React, { useState, useEffect } from 'react';
    import { NavDropdownMenu, NavDropdownItem } from "react-bootstrap-submenu";
    import "react-bootstrap-submenu/dist/index.css";


    const Home = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
        <header>
            <div>
        <Navbar expand="lg" 
            fixed="top" 
            onToggle={(expanded) => setMenuOpen(expanded)}
            className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'active' : ''}`}>
        <Container>
            <Navbar.Brand href="#home"><span><img src="images/WHS Logo.png" alt="logo"height={55}/></span></Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>

        <NavDropdown title="Our Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="#floating-terminal">
                  Floating Terminal (WHS Iskandar 1)
                </NavDropdown.Item>
                <NavDropdown.Item href="#ocean-flow-1">
                  Floating Crane - Ocean Flow 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#ocean-flow-3">
                  Floating Crane - Ocean Flow 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#padmasari">
                  Floating Crane - Padmasari
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#tug-barge">
                  Tug and Barge (Prime Series)
                </NavDropdown.Item>
        </NavDropdown>
                
                <Nav.Link href="#link"className='nav-link'>gallery</Nav.Link>
                <Nav.Link href="#link"className='nav-link'>Contact Us</Nav.Link>
                <Nav.Link href="#link"className='nav-link'>Login</Nav.Link>
                <Nav.Link href="#link"className='nav-link'>Exdoma</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
        </header>

        <main>
            <section className='section-1'>
                <div className='hero d-flex align-items-center'>
                    <div className='overlay'>
                    <div className='container-fluid'>
                        <div className='hero-content text-center'>
                        <h1> HOMOGENOUSLY <span style={{ color: '#d91d1d' }}>BLENDED</span></h1>
                        <h3> Desired Coal<span style={{ color: '#d91d1d' }}> Product</span></h3>
                                <p> We envisage to deliver homogeneously blended coal, 
                                    representative of what a Supplier may have offered to provide to an end user, 
                                    with a greater control on the end quality. With three separate storage bins, 
                                    capable of accommodating more than 50,000 MT, we are able to offer a number of blending options to achieve the desired end product. 
                                    Added to this our high load rate (above 30,000 MT per day) and integrated deterrents built in to our loading system is also our strongest suite, 
                                    for our clients. </p>
                                    <div className="d-flex justify-content-start">
                                    <Button variant="primary">Learn More</Button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    
             <section className='section-2 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center mb-5'>
              <h1>OUR <span style={{ color: '#d91d1d' }}>SERVICE</span></h1>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-4 mb-4'>
                <div className='custom-card' style={{ backgroundImage: 'url(images/tb2.jpg)' }}>
                  <div className='overlay'>
                    <h3 className="title">Floating Storage Terminal</h3>
                    <p className="details">
                      Designed with three bins and high-speed conveyors, enabling seamless homogenous blending.
                    </p>
                    <Button variant="danger">Learn More</Button>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-4'>
                <div className='custom-card' style={{ backgroundImage: 'url(images/carousel3.jpg)' }}>
                  <div className='overlay'>
                    <h3 className="title">Floating Storage Terminal</h3>
                    <p className="details">
                      Designed with three bins and high-speed conveyors, enabling seamless homogenous blending.
                    </p>
                    <Button variant="danger">Learn More</Button>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-4'>
                <div className='custom-card' style={{ backgroundImage: 'url(images/carousel2.jpg)' }}>
                  <div className='overlay'>
                    <h3 className="title">High Load Rate</h3>
                    <p className="details">
                      Loading more than 30,000 MT per day using dual spouts and smart monitoring.
                    </p>
                    <Button variant="danger">Explore</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>

        <footer>

        </footer>
        </>
    )
    }

    export default Home
