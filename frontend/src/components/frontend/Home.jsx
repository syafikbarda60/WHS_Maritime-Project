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
    import Carousel from 'react-bootstrap/Carousel';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';
    import { useInView } from 'react-intersection-observer';
    import { motion } from "framer-motion";
    import "animate.css";


    const Home = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

     const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
        
    }); 

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
            <section className="section-1">
        <Carousel fade controls={false} indicators={false} interval={3500} pause={false}>
            {/* Slide 1 */}
            <Carousel.Item>
            <div className="hero" style={{ backgroundImage: "url('/images/tb2.jpg')" }}>
                <div className="overlay">
                <div className="container-fluid">
                    <div className="hero-content text-center">
                    <h1>HOMOGENOUSLY <span style={{ color: '#d91d1d' }}>BLENDED</span></h1>
                    <h3> Desired Coal <span style={{ color: '#d91d1d' }}> Product</span></h3>
                    <p>We deliver homogeneously blended coal with better control on end quality.</p>
                    <Button variant="primary">Learn More</Button>
                    </div>
                </div>
                </div>
            </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
            <div className="hero" style={{ backgroundImage: "url('/images/carousel2.jpg')" }}>
                <div className="overlay">
                <div className="container-fluid">
                    <div className="hero-content text-center">
                    <h1>HIGH <span style={{ color: '#d91d1d' }}>LOAD RATE</span></h1>
                    <h3> Efficient <span style={{ color: '#d91d1d' }}> System</span></h3>
                    <p>We load over 30,000 MT/day using dual spouts and smart monitoring.</p>
                    <Button variant="primary">Explore</Button>
                    </div>
                </div>
                </div>
            </div>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
            <div className="hero" style={{ backgroundImage: "url('/images/carousel3.jpg')" }}>
                <div className="overlay">
                <div className="container-fluid">
                    <div className="hero-content text-center">
                    <h1>CUSTOMIZED <span style={{ color: '#d91d1d' }}>BLENDING</span></h1>
                    <h3> Flexible <span style={{ color: '#d91d1d' }}> Options</span></h3>
                    <p>Choose blending from 3 storage bins to achieve optimal product results.</p>
                    <Button variant="primary">Discover</Button>
                    </div>
                </div>
                </div>
            </div>
            </Carousel.Item>
        </Carousel>
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

        <section className='section-4 py-5'>
            <Container>
        <Row className="align-items-center">
          {/* Teks */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1>
                About Us
              </h1>
              <p>
                Was set up in the year 2007 with its Head office at “ Jakarta Indonesia”.
                 We have field offices at “Banjarmasin, Samarinda and Muara Satui” in Kalimantan.
                  PT. WHS Maritime Investments is Owned, Registered and Operated as a Domestic Shipping Company, 
                  fully equipped and Licensed under the aegis of the Ministry Of Shipping (SEACOM) of the Republic of Indonesia.
              </p>
            </motion.div>
          </Col>

          {/* Gambar dengan overlay animasi */}
          <Col md={6} className="position-relative">
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img
                src="/images/tb2.jpg"
                alt="about"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <motion.div
                className="overlay"
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  backgroundColor: "#f15a24", // oranye
                  zIndex: 1,
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
        </section>

         <section className="section3 bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            ref={ref}
            className={`about-text ${
              inView ? "animate__animated animate__slideInLeft" : ""
            }`}
          >
            <h2>
              Why Choose <span style={{ color: "#d91d1d" }}>Us</span>
            </h2>
            <h4>Well Integrated And Efficient</h4>
            <p>
              Collaboration Of Heavy Equipment And Well-Integrated Support
              Machinery, Suitably Modified For The Operating Environment...
            </p>
            <Button variant="danger">Learn More</Button>
          </Col>

          <Col md={6}>
            <div className="about-video">
              <video
                controls
                poster="/images/video-thumb.jpg"
                style={{ width: "100%", borderRadius: "12px" }}
              >
                <source src="/video/sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        </main>

              <footer className="footer-section">
      <div className="footer-content">
        <Container>
          <Row>
            <Col md={8}>
              <div className="footer-left">
                <h5><strong>Head Quarter</strong><br />Jakarta Indonesia</h5>
                <p>
                  Pondok Indah Office Tower2<br />
                  16th Floor, Suite 1603<br />
                  Jl. Sultan Iskandar Muda Kav V-TA Jakarta 12310<br />
                  - INDONESIA
                </p>
                <p>📞 +62 21 29705400</p>
                <p>📠 +62 21 29705401</p>
                <p>✉️ info@whsmaritime.com</p>
              </div>
            </Col>

            <Col md={4} className="text-center">
              <img
                src="/images/ISO.png"
                alt="RINA Certification"
                className="rina-logo"
              />
              <p className="cert-label">CERTIFIED MANAGEMENT SYSTEM</p>
              <p className="cert-iso">ISO 9001 · ISO 45001</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-wave">
        <img src="/images/wave.svg" alt="Wave background" />
      </div>
    </footer>
        </>
    );
    };

    export default Home
