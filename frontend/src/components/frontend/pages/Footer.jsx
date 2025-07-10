// src/components/layout/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    
    <footer className="footer-section">
      <div className="footer-content">
        <Container fluid>
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
              <img src="/images/ISO.png" alt="RINA Certification" className="rina-logo" />
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
  );
};

export default Footer;
