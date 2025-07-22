import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns_PNTS";

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
    <>
      <Header_ns />
      <main className="ocean-flow-3">
        <section className="hero">
          <img src="/Assets/OC3.jpg" alt="Ocean Flow 3" className="hero-bg" />

          <div className="hero-overlay">
            <div className="hero-content">
              <img
                src="/Assets/OC3nobg.png"
                alt="Kapal"
                className={`hero-image ${
                  isImageVisible ? "fade-in" : "fade-out"
                }`}
              />

              <h1
                className={`hero-title ${
                  isImageVisible ? "fade-in" : "fade-out"
                }`}
              >
                OCEAN FLOW 3
              </h1>
            </div>
          </div>

          <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#d91d1d"
                fillOpacity="1"
                d="M0,224L80,234.7C160,245,320,267,480,256C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="content">
          <div className="content-left">
            <div className="link-list">
              <Link to="/floatingTerminal" className="terminal-link">
                • Floating Terminal WHS Iskandar I
              </Link>
              <Link to="/oceanFlow1" className="terminal-link">
                • Ocean Flow 1
              </Link>
              <Link to="/oceanFlow3" className="terminal-link">
                • Ocean Flow 3
              </Link>
              <Link to="/padmasari" className="terminal-link">
                • Padmasari
              </Link>
              <Link to="/tbSeries" className="terminal-link">
                • Tug And Barge Prime Series
              </Link>
            </div>
            <div className="image-gallery">
              <img src="/Assets/OC3.jpg" alt="oceanflow1" />
              <img src="/Assets/OC3-2.jpg" alt="oceanflow2" />
            </div>
          </div>

          <div className="content-right">
            <h2>Specification</h2>
            <div className="table-wrapper">
              <table>
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
                  <tr>
                    <td>Ship Type</td>
                    <td>Bulk Coal Stock & Loading Barge</td>
                  </tr>
                  <tr>
                    <td>Equipped with</td>
                    <td>
                      - 3 backhoes
                      <br />- 2 groups of conveyors
                      <br />- 2 travelling spreaders
                    </td>
                  </tr>
                  <tr>
                    <td>Flag</td>
                    <td>Indonesia</td>
                  </tr>
                  <tr>
                    <td>Year Built</td>
                    <td>2011</td>
                  </tr>
                  <tr>
                    <td>Port of Registry</td>
                    <td>Tanjung Priok</td>
                  </tr>
                  <tr>
                    <td>Classification</td>
                    <td>B.K.I</td>
                  </tr>
                  <tr>
                    <td>LOA</td>
                    <td>198.00 m</td>
                  </tr>
                  <tr>
                    <td>Beam Moulded</td>
                    <td>54.00 m</td>
                  </tr>
                  <tr>
                    <td>Depth Moulded</td>
                    <td>12.00 m</td>
                  </tr>
                  <tr>
                    <td>Draft Loaded</td>
                    <td>8.50 m</td>
                  </tr>
                  <tr>
                    <td>Air Draft</td>
                    <td>19.00 m</td>
                  </tr>
                  <tr>
                    <td>Gross Tonnage</td>
                    <td>38,700 Tons</td>
                  </tr>
                  <tr>
                    <td>Net Tonnage</td>
                    <td>11,610 Tons</td>
                  </tr>
                  <tr>
                    <td>Ballast Water Tank</td>
                    <td>abt. 44,000 m³</td>
                  </tr>
                  <tr>
                    <td>Fuel Oil Tank</td>
                    <td>abt. 4,950 m³</td>
                  </tr>
                  <tr>
                    <td>Fresh Water Tank</td>
                    <td>abt. 1,100 m³</td>
                  </tr>
                  <tr>
                    <td>Cargo Hold</td>
                    <td>abt. 67,000 m³</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="carousel-wrapper">
          <Carousel
            fade
            indicators={true}
            controls={false}
            interval={3000}
            pause={false}
            wrap={true}
          >
            <Carousel.Item>
              <img className="carousel-images" src="/Assets/OC3.jpg" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-images" src="/Assets/OC3-2.jpg" alt="" />
            </Carousel.Item>
          </Carousel>
        </section>

        {showArrow && (
          <button
            className="arrow-up"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FiArrowUp />
          </button>
        )}
      </main>
      <Footer />
    </>
  );
};

export default OceanFlow3;
