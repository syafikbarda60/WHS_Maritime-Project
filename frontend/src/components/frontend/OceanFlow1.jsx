import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns_PNTS";

const FloatingTerminal = () => {
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

      <main>
        <div className="ocean-flow bg-light">
          {/* Hero Section */}
          <div className="hero">
            <img
              src="/Assets/oceanflow1.jpg"
              alt="Ocean Flow"
              className="hero-bg"
            />

            <div className="hero-overlay">
              <div className="hero-content">
                {/* <img
                  src="/Assets/oceanflownobg.png"
                  alt="Kapal"
                  className={`hero-image ${
                    isImageVisible ? "fade-in" : "fade-out"
                  }`}
                /> */}
                <h1
                  className={`hero-title ${
                    isImageVisible ? "fade-in" : "fade-out"
                  }`}
                >
                  OCEAN FLOW I
                </h1>
              </div>
            </div>

            <div className="wave">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#d91d1d"
                  fill-opacity="1"
                  d="M0,224L80,234.7C160,245,320,267,480,256C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
              {/*
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#cc433c"
                  fillOpacity="1"
                  d="M0,160L40,176C80,192,160,224,240,208C320,192,400,128,480,112C560,96,640,128,720,170.7C800,213,880,267,960,266.7C1040,267,1120,213,1200,176C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
              */}
            </div>
          </div>

          {/* Content Section */}
          <div className="content">
            <div className="content-left">
              <div className="link-list">
                <Link to="/floatingTerminal">
                  • Floating Terminal WHS Iskandar I
                </Link>
                <Link to="/oceanFlow1">• Ocean Flow 1</Link>
                <Link to="/oceanFlow3">• Ocean Flow 3</Link>
                <Link to="/padmasari">• Padmasari</Link>
                <Link to="/tbSeries">• Tug And Barge Prime Series</Link>
              </div>

              <div className="image-gallery">
                <img src="/Assets/oceanflow1.jpg" alt="oceanflow1" />
                <img src="/Assets/oceanflow2.jpg" alt="oceanflow2" />
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
                      <td>Ship Type</td>
                      <td>
                        Bulk Coal Stock & Loading Barge <br />
                        Equipped with: <br />
                        - 3 backhoes <br />
                        - 2 groups of conveyors <br />- 1 travelling spreader
                      </td>
                    </tr>
                    <tr>
                      <td>Flag</td>
                      <td>Indonesia</td>
                    </tr>
                    <tr>
                      <td>Year Built</td>
                      <td>2010</td>
                    </tr>
                    <tr>
                      <td>Port of Registry</td>
                      <td>Jakarta</td>
                    </tr>
                    <tr>
                      <td>Classification</td>
                      <td>B.K.I</td>
                    </tr>
                    <tr>
                      <td>LOA</td>
                      <td>95.00 m</td>
                    </tr>
                    <tr>
                      <td>Beam Moulded</td>
                      <td>32.00 m</td>
                    </tr>
                    <tr>
                      <td>Depth Moulded</td>
                      <td>6.00 m</td>
                    </tr>
                    <tr>
                      <td>Draft Loaded</td>
                      <td>2.00 m</td>
                    </tr>
                    <tr>
                      <td>Air Draft</td>
                      <td>17.00 m</td>
                    </tr>
                    <tr>
                      <td>Gross Tonnage</td>
                      <td>1,599 Tons</td>
                    </tr>
                    <tr>
                      <td>Ballast Water Tank</td>
                      <td>abt. 2,500 cub.m</td>
                    </tr>
                    <tr>
                      <td>Fuel Oil Tank</td>
                      <td>abt. 500 cub.m</td>
                    </tr>
                    <tr>
                      <td>Fresh Water Tank</td>
                      <td>abt. 500 cub.m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="carousel-wrapper">
            <Carousel
              fade
              indicators
              controls={false}
              interval={3000}
              pause={false}
              wrap
            >
              <Carousel.Item>
                <img
                  className="carousel-images"
                  src="/Assets/oceanflow1.jpg"
                  alt=""
                  //style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-images"
                  src="/Assets/oceanflow2.jpg"
                  alt=""
                  //style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-images"
                  src="/Assets/oceanflow3.jpg"
                  alt=""
                  //style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Arrow Up */}
          {showArrow && (
            <button
              className="arrow-up"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FiArrowUp />
            </button>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FloatingTerminal;
