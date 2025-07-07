import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <>
    <header>
        <div>
        <Navbar expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home"><span><img src="images/WHS Logo.png" alt="logo"height={55}/></span></Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"className='nav-link'>Link</Nav.Link>
            <Nav.Link href="#link"className='nav-link'>Link</Nav.Link>
            <Nav.Link href="#link"className='nav-link'>Link</Nav.Link>
            <Nav.Link href="#link"className='nav-link'>Link</Nav.Link>
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
                    <span> Desired Coal Product </span>
                        <h1> HOMOGENOUSLY BLENDED </h1>
                            <p> We envisage to deliver homogeneously blended coal, 
                                representative of what a Supplier may have offered to provide to an end user, 
                                with a greater control on the end quality. With three separate storage bins, 
                                capable of accommodating more than 50,000 MT, we are able to offer a number of blending options to achieve the desired end product. 
                                Added to this our high load rate (above 30,000 MT per day) and integrated deterrents built in to our loading system is also our strongest suite, 
                                for our clients. </p>
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
