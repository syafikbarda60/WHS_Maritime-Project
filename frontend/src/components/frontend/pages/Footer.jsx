import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <Container fluid>
        <Row className="footer-content">
          {/* KIRI */}
          <Col md={4} className="footer-left">
            <h5>About Us</h5>
            <div className="footer-logo">
              <img src="/images/logo PT WHS.jpg" alt="WHS Logo" />
              <span>PT. WHS MARITIME INVESTMENTS</span>
            </div>
            <p>
              Pondok Indah Office Tower 2<br />
              Lantai 16 Suite 1603
              <br />
              Jl. Sultan Iskandar Muda
              <br />
              Kav. V-TA, DKI Jakarta 12310
            </p>
            <p>Telp: 021-29705400</p>
            <p>Fax: 021-29705401</p>
            <p>Email: info@whsmaritime.com</p>
            <a
              href="https://whsmaritime.com/wp-content/uploads/2023/01/Company-Profile-Orange-convert.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="link" size="sm">
                Download Brochure
              </Button>
            </a>
          </Col>

          {/* TENGAH */}
          <Col md={4} className="footer-center text-center">
            <h5>ISO</h5>
            <div>
              <img
                src="/images/ISO.png"
                alt="RINA Certification"
                className="ISO"
              />
              <p className="cert-label">CERTIFIED MANAGEMENT SYSTEM</p>
              <p className="cert-iso">ISO 9001 · ISO 45001</p>
            </div>
          </Col>

          {/* KANAN */}
          <Col md={4} className="footer-right">
            <h5>Sitemap</h5>
            <ul className="footer-nav">
              <li onClick={() => navigate("/")}>Home</li>
              <li>
                Our Services
                <ul>
                  <li onClick={() => navigate("/floatingTerminal")}>
                    Floating Terminal (WHS Iskandar 1)
                  </li>
                  <li>
                    Floating Crane
                    <ul>
                      <li onClick={() => navigate("/oceanFlow1")}>
                        Ocean Flow 1
                      </li>
                      <li onClick={() => navigate("/oceanFlow3")}>
                        Ocean Flow 3
                      </li>
                      <li onClick={() => navigate("/padmasari")}>Padmasari</li>
                    </ul>
                  </li>
                  <li onClick={() => navigate("/tbSeries")}>
                    Tug and Barge (Prime Series)
                  </li>
                </ul>
              </li>
              <li onClick={() => navigate("/gallery")}>Gallery</li>
              <li onClick={() => navigate("/contact_us")}>Contact Us</li>
              <li onClick={() => navigate("/login")}>Login</li>
              <li onClick={() => navigate("/exdoma")}>Exdoma</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* WAVE */}
      <div className="footer-wave">
        <img src="/images/wave.svg" alt="Wave background" />
      </div>

      {/* COPYRIGHT + ADMINISTRATION */}
      <div className="footer-bottom">
        <p>© 2022 PT. WHS MARITIME INVESTMENTS</p>
        <Button
          variant="link"
          size="sm"
          onClick={() => (window.location.href = "/admin/login")}
          className="administration-link"
        >
          Administration
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
