import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Header from "@components/frontend/pages/Header";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";

const OceanFlow3 = () => {
  const [showArrow, setShowArrow] = useState(false);
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
    <div className="ocean-flow">
      <img src="/Assets/OC3.jpg" alt="Ocean Flow 3" className="image-11" />

      <div className="effect-background">
        <img
          src="/Assets/OC3nobg.png"
          alt="Kapal"
          className={`ocean-flow-3-img ${
            isImageVisible ? "fade-in" : "fade-out"
          }`}
        />

        <h1
          className={`ocean-flow-3-title ${
            isImageVisible ? "fade-in" : "fade-out"
          }`}
        >
          OCEAN FLOW 3
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
        Designed with three separate storage bins capable of storing more than
        50,000 MT and technologically advanced double line conveyor system,
        capable of loading using 2 spouts simultaneously at a very high speed.
        We are able to perform homogeneous blending without compromising our
        high loading rate.
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

        <img src="/Assets/OC3.jpg" alt="oceanflow1" className="oc-1" />
        <img src="/Assets/OC3-2.jpg" alt="oceanflow2" className="oc-2" />

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
              src="/Assets/OC3.jpg"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Assets/OC3-2.jpg"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default OceanFlow3;
