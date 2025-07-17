//import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { NavDropdownMenu, NavDropdownItem } from "react-bootstrap-submenu";
import "react-bootstrap-submenu/dist/index.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "animate.css";

import Header from "@components/frontend/pages/Header";
import Footer from "@components/frontend/pages/Footer";
//import Header_ns from '@components/frontend/pages/Header_ns';

//----------------------------------------------header effect------------------------------------------------------------------------------------------------------------------
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

  //-------------------------------------------------------carousel text component--------------------------------------------------------------------------------------------------
  const data = [
    {
      title: "Homogenously Blended Desired Coal Product",
      desc: "We envisage to deliver homogeneously blended coal, representative of what a Supplier may have offered to provide to an end user, with a greater control on the end quality. With three separate storage bins, capable of accommodating more than 50,000 MT, we are able to offer a number of blending options to achieve the desired end product. Added to this our high load rate (above 30,000 MT per day) and integrated deterrents built in to our loading system is also our strongest suite, for our clients.",
    },
    {
      title: "Modern Assets Well-Integrated and Efficient",
      desc: "Collaboration of heavy equipment and well-integrated support machinery, suitably modified for the operating environment, uniformly and systematically designed and laid out for ease of operation, along with appropriate Safety and Operating protocols and procedures is how we position ourselves with our modern assets. Our Floating loaders and Storage platform are equipped with a variety of additional equipment, to meet and go beyond our client needs and expectations.",
    },
    {
      title: "Technologically Improved Developing the Best Technology",
      desc: "We offer relatively young, well designed and appointed equipment, with the most robust and reliable technology and our goal is to grow to be a leader for technological advances in area of logistics for offshore transshipment. Some of our add on features are Belt scales, Auto/mechanical sampler, metal detector and metal separator in order to deliver a clean product.",
    },

    {
      title: "Quality Controlled Deliver a Quality Product",
      desc: "We define quality control as a process by which entities combine inherent expertise and understanding of the entire operation coupled with advanced technology to maintain the quality of the end product. Our motto is to combine reliable technology with well managed processes, derived from a team of highly motivated and competent personnel with the requisite knowledge, skill, and experience.",
    },
  ];

  //-------------------------------------------------------carousel text------------------------------------------------------------------------------------------------------
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % data.length);
        setFade(true);
      }, 500); // fade out interval time
    }, 7000); // transition text, change every 7 sencond

    return () => clearInterval(interval);
  }, []);

  //---------------------------------------------------------------news-------------------------------------------------------------------------------------------------------------------
  /* const newsItems = [
  {
    date: '11 May 2025',
    title: 'Bali Golf',
    description:
      'In Today’s Fast Paced World Of Business, Cultivating Stronger Relationship And Acquiring New And Potential Clients, Is Central...',
    image: '/images/tb2.jpg',
    color: '#E63946',
  },
  {
    date: '14 April 2025',
    title: 'Coaltrans',
    description:
      'Coaltrans, Is The Single Largest Reputable Conference For The Coal Industry In Indonesia, Which Offers A Dynamic Platform...',
    image: '/images/tb2.jpg',
    color: '#457B9D',
  },
];
*/

  const goTo = (i) => {
    setIndex(i);
    setFade(true);
  };

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("http://localhost:8000/api/services");
      const result = await res.json();
      if (result.status) setNewsItems(result.data);
    };
    fetchServices();
  }, []);

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/services");
        const result = await res.json();
        if (result.status) {
          setNewsItems(result.data);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="section-1">
          <Carousel
            fade
            controls={false}
            indicators={false}
            interval={2500}
            pause={false}
          >
            {/* Slide 1 */}
            <Carousel.Item>
              <div
                className="hero"
                style={{ backgroundImage: "url('/images/whs iskandar.jpg')" }}
              >
                <div className="overlay">
                  <div className="container-fluid">
                    <div className="hero-content text-center">
                      <h1>
                        HOMOGENOUSLY{" "}
                        <span style={{ color: "#d91d1d" }}>BLENDED</span>
                      </h1>
                      <h3>
                        {" "}
                        Desired Coal{" "}
                        <span style={{ color: "#d91d1d" }}> Product</span>
                      </h3>
                      <p>
                        We envisage to deliver homogeneously blended coal,
                        representative of what a Supplier may have offered to
                        provide to an end user, with a greater control on the
                        end quality. With three separate storage bins, capable
                        of accommodating more than 50,000 MT, we are able to
                        offer a number of blending options to achieve the
                        desired end product. Added to this our high load rate
                        (above 30,000 MT per day) and integrated deterrents
                        built in to our loading system is also our strongest
                        suite, for our clients.
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => {
                          document
                            .getElementById("section3")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div
                className="hero"
                style={{ backgroundImage: "url('/images/carousel3.jpg')" }}
              >
                <div className="overlay">
                  <div className="container-fluid">
                    <div className="hero-content text-center">
                      <h1>
                        MODERN <span style={{ color: "#d91d1d" }}>ASSETS</span>
                      </h1>
                      <h3>
                        {" "}
                        Well Integrated and{" "}
                        <span style={{ color: "#d91d1d" }}>Efficient</span>
                      </h3>
                      <p>
                        Collaboration of heavy equipment and well-integrated
                        support machinery, suitably modified for the operating
                        environment, uniformly and systematically designed and
                        laid out for ease of operation, along with appropriate
                        Safety and Operating protocols and procedures is how we
                        position ourselves with our modern assets. Our Floating
                        loaders and Storage platform are equipped with a variety
                        of additional equipment, to meet and go beyond our
                        client needs and expectations.
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => {
                          document
                            .getElementById("section3")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <div
                className="hero"
                style={{ backgroundImage: "url('/images/carousel2.jpg')" }}
              >
                <div className="overlay">
                  <div className="container-fluid">
                    <div className="hero-content text-center">
                      <h1>
                        TECHNOLOGICALLY <br/>
                        <span style={{ color: "#d91d1d" }}>IMPROVED</span>
                      </h1>
                      <h3>
                        {" "}
                        developing the best{" "}
                        <span style={{ color: "#d91d1d" }}>technology</span>
                      </h3>
                      <p>
                        We offer relatively young, well-designed and appointed
                        equipment, with the most robust and reliable techndlogy,
                        and our goal is to grow to be a leader for technological
                        advánces in the area of logistics for offshore
                        transshipment. Some of our add-on features are belt
                        scales, auto/mechanical sampler, metal detector, and
                        metal separator in order to deliver a clean product
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => {
                          document
                            .getElementById("section3")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div
                className="hero"
                style={{ backgroundImage: "url('/images/SCREEN-HOOPER.jpg')" }}
              >
                <div className="overlay">
                  <div className="container-fluid">
                    <div className="hero-content text-center">
                      <h1>
                        QUALITTY
                        <span style={{ color: "#d91d1d" }}>CONTROLLED</span>
                      </h1>
                      <h3>
                        Deliver a{" "}
                        <span style={{ color: "#d91d1d" }}>
                          {" "}
                          quality product
                        </span>
                      </h3>
                      <p>
                        We define quality Control as a process by which entities
                        comnbine inherent expertise and understanding of the
                        entire operation coupled with advanced technology to
                        maintain the quality of the end product: our motto is to
                        combine reliable technology with well managed processes,
                        derived from a team of highly motivated and competent
                        personnel with the requisite knowledge, skill, and
                        experience.
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => {
                          document
                            .getElementById("section3")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="section-4 py-5">
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
                    PT. WHS Maritime Investments is a company engaged in
                    domestic and international logistics and shipping in
                    Indonesia, providing services such as transshipment,
                    floating storage terminals, floating transhippers, as well
                    as tug & barge operations. Established in 2006, the company
                    is licensed under the Indonesian Ministry of Transportation
                    (Kemenhub RI). Headquartered in Jakarta, with field offices
                    in Samarinda, Banjarmasin, and Muara Satui, WHS Maritime
                    upholds the principles of Integrity, Safety, and Customer
                    Satisfaction. Its strengths include advanced conveyor
                    systems, high loading rates (over 30,000 MT/day), delivery
                    of homogenized coal, and an efficient integrated fleet. The
                    main fleet comprises WHS Iskandar 1 (with a capacity of
                    54,000–60,000 tons) and three floating cranes: Ocean Flow 1,
                    Ocean Flow 3, and Padmasari.
                  </p>
                </motion.div>
              </Col>

              {/* Gambar + Blue Box */}
              <Col md={6} className="position-relative">
                <motion.div
                  className="image-wrapper"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ position: "relative", overflow: "visible" }}
                >
                  {/* Kotak biru di belakang */}
                  <motion.div
                    className="blue-box"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  {/* Gambar utama */}
                  <img
                    src="/images/tb2.jpg"
                    alt="about"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />

                  {/* Overlay merah depan */}
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
                      backgroundColor: "#d91d1d",
                      zIndex: 3,
                      borderRadius: "8px",
                    }}
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-2 bg-light py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h1>
                OUR <span style={{ color: "#d91d1d" }}>SERVICE</span>
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div
                  className="custom-card"
                  style={{ backgroundImage: "url(images/tb2.jpg)" }}
                >
                  <div className="overlay">
                    <h3 className="title">Floating Storage Terminal</h3>
                    <p className="details">
                      Designed with three separate storage bins capable of
                      storing more than 50,000 MT and technologically advanced
                      double line conveyor system, capable of loading using 2
                      spouts simultaneously at a very high speed. We are able to
                      perform homogenous blending without compromising our high
                      loading rate.
                    </p>
                    <Button variant="danger">Learn More</Button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  className="custom-card"
                  style={{ backgroundImage: "url(images/carousel3.jpg)" }}
                >
                  <div className="overlay">
                    <h3 className="title">
                      OFF SHORE FLOATING FACILITIES (TRANSHIPPERS)
                    </h3>
                    <p className="details">
                      PNTS has 3 floating Transhippers that uses long arm
                      travelling, high bucket capacity Excavators coupled to a
                      conveyor belt system, which is then able to unload bulk
                      material from the barge to mother vessel with a sustained
                      high loading rate.
                    </p>
                    <Button variant="danger">Learn More</Button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  className="custom-card"
                  style={{ backgroundImage: "url(images/carousel2.jpg)" }}
                >
                  <div className="overlay">
                    <h3 className="title">TUG AND BARGE</h3>
                    <p className="details">
                      We offers barging services for Domestic, Longhaul as well
                      as Transshipment destinations. 20 sets of 270 feet and 300
                      feet barge coupled to suitable Tugs of the appropriate
                      power are available to the discerning Customer to meet his
                      requirements. PNTS also operates about 20 to 30 sets on a
                      Voyage as well as Time Charter basis to meet its customers
                      requirements.
                    </p>
                    <Button variant="danger">Explore</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section3" className="section3 py-5">
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
                  Why Choose <span style={{ color: "#d91d1d" }}>Us?</span>
                </h2>
                <div className="text-carousel-container">
                  <Container>
                    <div
                      className={`text-content ${
                        fade ? "fade-in" : "fade-out"
                      }`}
                    >
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
                  </Container>
                </div>
              </Col>

              <Col md={6}>
                <div className="about-video">
                  <Container>
                    <video
                      controls
                      poster="/images/tb2.jpg"
                      style={{ width: "100%", borderRadius: "12px" }}
                    >
                      <source
                        src="https://whsmaritime.com/wp-content/uploads/video/PNTS Company Profile.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-5 bg-light py-5">
          <div className="news">
            <h2>
              Company <span style={{ color: "#d91d1d" }}>News</span>
            </h2>
            <div className="news-container">
              {newsItems.length === 0 ? (
                <p>No news found.</p>
              ) : (
                newsItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="news-card animate"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img
                      src={`http://localhost:8000/storage/${item.img}`}
                      alt={item.title}
                    />
                    <div className="news-overlay">
                      <div
                        className="news-date"
                        style={{ backgroundColor: "#d31c28" }}
                      >
                        {new Date(item.created_at).toLocaleDateString()}
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.short_desc}</p>
                      <a href="#">
                        Read More <span>&#x203A;</span>
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
