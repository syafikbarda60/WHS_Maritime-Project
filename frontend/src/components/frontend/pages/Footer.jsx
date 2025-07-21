import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section" style={{ alignItems: "center" }}>
      <Container fluid>
        <Row className="footer-content">
          {/* KIRI */}
          <Col md={5} className="footer-left">
            <h5>
              <strong>Head Quarter</strong>
              <br />
              Jakarta Indonesia
            </h5>
            <p>
              Pondok Indah Office Tower2
              <br />
              16th Floor, Suite 1603
              <br />
              Jl. Sultan Iskandar Muda Kav V-TA Jakarta 12310
              <br />- INDONESIA
            </p>
            <p>📞 +62 21 29705400</p>
            <p>📠 +62 21 29705401</p>
            <p>✉️ info@whsmaritime.com</p>

            <div className="brosure">
              <a
                href="https://whsmaritime.com/wp-content/uploads/2023/01/Company-Profile-Orange-convert.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link" size="lg">
                  Download Brosur
                </Button>
              </a>
            </div>
          </Col>

          {/* TENGAH */}
          <Col md={2} className="footer-center">
            <h5>Quick Links</h5>
            <nav className="footer-nav">
              <span onClick={() => navigate("/")} className="footer-link">
                Home
              </span>
              <span
                onClick={() => navigate("/gallery")}
                className="footer-link"
              >
                Gallery
              </span>
              <span
                onClick={() => navigate("/contact_us")}
                className="footer-link"
              >
                Contact Us
              </span>
              <span
                onClick={() => navigate("/floatingTerminal")}
                className="footer-link"
              >
                Our Service
              </span>
              <span
                onClick={() => navigate("/admin/login")}
                className="footer-link"
              >
                Login
              </span>
              <span onClick={() => navigate("/exdoma")} className="footer-link">
                Exdoma
              </span>
            </nav>
          </Col>

          {/* KANAN */}
          <Col md={5} className="footer-right text-center">
            <img
              src="/images/ISO.png"
              alt="RINA Certification"
              className="rina-logo"
            />
            <p className="cert-label">CERTIFIED MANAGEMENT SYSTEM</p>
            <p className="cert-iso">ISO 9001 · ISO 45001</p>
            <div className="Administration">
              <Button
                variant="link"
                onClick={() => navigate("/admin/login")}
                size="lg"
              >
                <a>Administration</a>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-wave">
        <img src="/images/wave.svg" alt="Wave background" />
      </div>
    </footer>
  );
};

export default Footer;
