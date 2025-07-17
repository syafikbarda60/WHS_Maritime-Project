import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Header from "@components/frontend/pages/Header";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";

const FloatingTerminal = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 1100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isImageVisible, setIsImageVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowArrow(currentScrollY > 950);

      if (currentScrollY > lastScrollY && currentScrollY > 260) {
        setIsImageVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsImageVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <Header_ns />
    <main>
      <div className="floating-terminal">
        <img
          src="/Assets/floatingterminal_2.jpeg"
          alt="Floating Terminal"
          className="image-9"
        />

        <div className="effect-background">
          <img
            src="/Assets/iskandarnobg.png"
            alt="Kapal"
            className={`iskandar-no-bg ${
              isImageVisible ? "fade-in" : "fade-out"
            }`}
          />

          <h1
            className={`floating-terminal-whs-i-skandar-i ${
              isImageVisible ? "fade-in" : "fade-out"
            }`}
          >
            FLOATING TERMINAL WHS ISKANDAR I
          </h1>
        </div>

        <div className="about-service">About Service</div>
        <div className="wave-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#cc433c"
              fillOpacity="1"
              d="M0,160L40,176C80,192,160,224,240,208C320,192,400,128,480,112C560,96,640,128,720,170.7C800,213,880,267,960,266.7C1040,267,1120,213,1200,176C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="about-services-2">
          Designed With Three Separate Storage Bins Capable Of Storing More Than
          50,000 MT And Technologically Advanced Double Line Conveyor System,
          Capable Of Loading Using 2 Spouts Simultaneously At A Very High Speed.
          We Are Able To Perform Homogeneous Blending Without Compromising Our
          High Loading Rate.
        </div>

        <div className="floating-terminal2">
          <div className="floating-terminal-link-list">
            <Link to="/floatingTerminal" className="terminal-link">
              • Floating Terminal WHS Iskandar I
            </Link>
            <br />
            <Link to="/oceanFlow1" className="terminal-link">
              • Ocean Flow 1
            </Link>
            <br />
            <Link to="/oceanFlow3" className="terminal-link">
              • Ocean Flow 3
            </Link>
            <br />
            <Link to="/padmasari" className="terminal-link">
              • Padmasari
            </Link>
            <br />
            <Link to="/tbSeries" className="terminal-link">
              • Tug And Barge Prime Series
            </Link>
          </div>
          <img
            src="/Assets/whs_iskandar.jpg"
            alt="Floating 1"
            className="floating-1"
          />
          <img
            src="/Assets/floatingterminal_2.jpeg"
            alt="Floating 2"
            className="floating-2"
          />
          <img
            src="/Assets/FLOATING_TERMINAL_3.jpg"
            alt="Floating 2"
            className="floating-3"
          />

          <div className="specification-title-outside">Specification</div>

          <div className="specification-table-wrapper">
            <table className="specification-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Storage Capacity</td>
                  <td>More than 50,000 MT</td>
                </tr>
                <tr>
                  <td>Conveyor System</td>
                  <td>Double line with 2 spouts</td>
                </tr>
                <tr>
                  <td>Blending</td>
                  <td>Homogenous blending supported</td>
                </tr>
                <tr>
                  <td>Loading Speed</td>
                  <td>High-speed simultaneous loading</td>
                </tr>
              </tbody>
            </table>
          </div>

          {showArrow && (
            <button
              className="arrow-up-fixed"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FiArrowUp />
            </button>
          )}
        </div>

        <div
          className="carousel-wrapper"
          style={{ marginTop: "700px", padding: "20px" }}
        >
          <Carousel
            fade
            indicators={true}
            controls={false}
            interval={3000}
            pause={false}
            wrap={true}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Assets/whs_iskandar.jpg"
                style={{ height: "650px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Assets/floatingterminal_2.jpeg"
                style={{ height: "650px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Assets/FLOATING_TERMINAL_3.jpg"
                style={{ height: "650px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
};

export default FloatingTerminal;
