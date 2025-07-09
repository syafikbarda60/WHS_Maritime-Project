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

    const data = [
    {
    title: "Homogenously Blended Desired Coal Product",
    desc: "We envisage to deliver homogeneously blended coal, representative of what a Supplier may have offered to provide to an end user, with a greater control on the end quality. With three separate storage bins, capable of accommodating more than 50,000 MT, we are able to offer a number of blending options to achieve the desired end product. Added to this our high load rate (above 30,000 MT per day) and integrated deterrents built in to our loading system is also our strongest suite, for our clients."
  },
  {
    title: "Modern Assets Well-Integrated and Efficient",
    desc: "Collaboration of heavy equipment and well-integrated support machinery, suitably modified for the operating environment, uniformly and systematically designed and laid out for ease of operation, along with appropriate Safety and Operating protocols and procedures is how we position ourselves with our modern assets. Our Floating loaders and Storage platform are equipped with a variety of additional equipment, to meet and go beyond our client needs and expectations."
  },
  {
    title: "Technologically Improved Developing the Best Technology",
    desc: "We offer relatively young, well designed and appointed equipment, with the most robust and reliable technology and our goal is to grow to be a leader for technological advances in area of logistics for offshore transshipment. Some of our add on features are Belt scales, Auto/mechanical sampler, metal detector and metal separator in order to deliver a clean product."
  },

   {
    title: "Quality Controlled Deliver a Quality Product",
    desc: "We define quality control as a process by which entities combine inherent expertise and understanding of the entire operation coupled with advanced technology to maintain the quality of the end product. Our motto is to combine reliable technology with well managed processes, derived from a team of highly motivated and competent personnel with the requisite knowledge, skill, and experience."
  }
  ];

  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % data.length);
        setFade(true);
      }, 500); // waktu fade out
    }, 3000); // ganti teks tiap 3 detik

    return () => clearInterval(interval);
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
        <Carousel fade controls={false} indicators={false} interval={2500} pause={false}>
            {/* Slide 1 */}
            <Carousel.Item>
            <div className="hero" style={{ backgroundImage: "url('/images/tb2.jpg')" }}>
                <div className="overlay">
                <div className="container-fluid">
                    <div className="hero-content text-center">
                    <h1>HOMOGENOUSLY <span style={{ color: '#d91d1d' }}>BLENDED</span></h1>
                    <h3> Desired Coal <span style={{ color: '#d91d1d' }}> Product</span></h3>
                    <p>We envisage to deliver homogeneously blended coal, representative of what a Supplier may have offered to provide to an end user,
                     with a greater control on the end quality. 
                     With three separate storage bins, capable of accommodating more than 50,000 MT, 
                     we are able to offer a number of blending options to achieve the desired end product. 
                     Added to this our high load rate (above 30,000 MT per day) and integrated deterrents built in to our loading system is also our 
                     strongest suite, for our clients.</p>
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
                    <h1>MODERN <span style={{ color: '#d91d1d' }}>ASSETS</span></h1>
                    <h3> Well<span style={{ color: '#d91d1d' }}> Integrated and Efficient</span></h3>
                    <p>Collaboration of heavy equipment and well-integrated support machinery, 
                        suitably modified for the operating environment, uniformly and systematically designed 
                        and laid out for ease of operation, along with appropriate Safety and Operating protocols and 
                        procedures is how we position ourselves with our modern assets. Our Floating loaders and Storage 
                        platform are equipped with a variety of additional equipment, to meet and go beyond our client needs 
                        and expectations.</p>
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
                ABOUT <span style={{ color: "#d91d1d" }}>US</span> 
              </h1>
              <p>
                PT. WHS Maritime Investments is a company engaged in domestic and international logistics and shipping in Indonesia, providing services such as transshipment, floating storage terminals, floating transhippers, as well as tug & barge operations. Established in 2006, the company is licensed under the Indonesian Ministry of Transportation (Kemenhub RI).

Headquartered in Jakarta, with field offices in Samarinda, Banjarmasin, and Muara Satui, WHS Maritime upholds the principles of Integrity, Safety, and Customer Satisfaction.

Its strengths include advanced conveyor systems, high loading rates (over 30,000 MT/day), delivery of homogenized coal, and an efficient integrated fleet.

The main fleet comprises WHS Iskandar 1 (with a capacity of 54,000–60,000 tons) and three floating cranes: Ocean Flow 1, Ocean Flow 3, and Padmasari.
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
                  backgroundColor: "#d91d1d", // oranye
                  zIndex: 1,
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
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

         <section className="section3 py-5">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            ref={ref}
            className={`about-text ${
              inView ? "animate__animated animate__slideInLeft" : ""
            }`}>
            <container>
            <div className="text-carousel-container">
            <div className={`text-content ${fade ? "fade-in" : "fade-out"}`}>
                <h2>{data[index].title}</h2>
                <p>{data[index].desc}</p>
            </div>
            <div className="indicators">
                {data.map((_, i) => (
                <button
                    key={i}
                    className={i === index ? "active" : ""}
                    onClick={() => goTo(i)}
                ></button>
                ))}
            </div>
            </div>
            </container>
            <Button variant="danger">Learn More</Button>
          </Col>

          <Col md={6}>
            <div className="about-video">
            <Container>
              <video
                controls
                poster="/images/tb2.jpg"
                style={{ width: "100%", borderRadius: "12px" }}
              >
                <source src="https://whsmaritime.com/wp-content/uploads/video/PNTS Company Profile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </Container>
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
