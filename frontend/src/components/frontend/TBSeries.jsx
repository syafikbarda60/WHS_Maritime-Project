import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Header from "@components/frontend/pages/Header";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";

const TB = () => {
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
        <div className="tb-series">
          <div className="hero">
            <img
              src="/Assets/tbseries-2.jpg"
              alt="TB Series"
              className="hero-bg"
            />

            <div className="hero-overlay">
              <div className="hero-content">
                <img
                  src="/Assets/tbseries-nobg.png"
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
                  TUGS AND BARGES (PRIME SERIES)
                </h1>
              </div>
            </div>

            {/* <div className="effect-background">
              
            </div> */}

            {/* <div className="about-service">About Service</div> */}

            <div className="wave">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#d91d1d"
                  fill-opacity="1"
                  d="M0,224L80,234.7C160,245,320,267,480,256C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* <div className="about-services-2">
            Designed with three separate storage bins capable of storing more
            than 50,000 MT and technologically advanced double line conveyor
            system, capable of loading using 2 spouts simultaneously at a very
            high speed. We are able to perform homogeneous blending without
            compromising our high loading rate.
          </div> */}

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
                <img
                  src="/Assets/tbseries-1.jpg"
                  alt="tbseries1"
                  //className="tbseries1"
                />
                <img
                  src="/Assets/tbseries-2.jpg"
                  alt="tbseries2"
                  //className="tbseries2"
                />
                <img
                  src="/Assets/tbseries-3.jpg"
                  alt="tbseries3"
                  //className="tbseries3"
                />
              </div>
            </div>

            <div className="content-right">
              <h2>TB PRIME 1600 HP SPECIFICATION</h2>
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
                  </tbody>
                </table>
              </div>

              <h2>TB PRIME 1600 HP SPECIFICATION</h2>
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
                  </tbody>
                </table>
              </div>

              <h2>TB PRIME 1600 HP SPECIFICATION</h2>
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
                  </tbody>
                </table>
              </div>

              {/* <div className="no-border-row-2">
                TB PRIME 1300 HP SPECIFICATION
              </div>
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
              <div className="no-border-row-3">
                BG SUPPORT 300 FEET SPECIFICATION
              </div>
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
              <div className="no-border-row-4">
                BG SUPPORT 270 FEET SPECIFICATION
              </div>
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
              </div> */}
            </div>
          </div>

          <div
            className="carousel-wrapper"
            //style={{ marginTop: "1350px", padding: "20px" }}
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
                  className="carousel-images"
                  src="/Assets/tbseries-1.jpg"
                  //style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-images"
                  src="/Assets/tbseries-2.jpg"
                  //style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-images"
                  src="/Assets/tbseries-3.jpg"
                  //style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-images"
                  src="/Assets/tbseries-4.jpg"
                  // style={{ height: "650px", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
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

export default TB;
