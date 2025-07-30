import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";

const ContactUs = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header_ns />
      <div className="contact-us bg-light">
        <div className="contact-hero-section">
          <div className="carousel-design">
            <img
              className="image-26"
              src="/Assets/whs-iskandar.jpg"
              alt="Background"
            />
            <div className="overlay"></div>
            <img
              src="/Assets/Effect-Background.png"
              alt="Overlay"
              className="effect-background"
            />
          </div>
          <motion.div
            className="contact-us3-container"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="contact-us3">
              <motion.span
                className="contact-us-3-span"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                CONTACT{" "}
              </motion.span>
              <motion.span
                className="contact-us-3-span2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                US
              </motion.span>
            </h2>
            <div className="line-2"></div>
          </motion.div>
        </div>

        <section className="main-contact-content">
          <motion.div
            className="headquarter-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Head Quarter</h2>
            <h3>Jakarta Indonesia</h3>
            <p>
              Pondok Indah Office Tower 2<br />
              16th Floor, Suite 1603
              <br />
              Jl. Sultan Iskandar Muda Kav Y-T8 Jakarta 12310
              <br />- INDONESIA
            </p>
            <div className="contact-detail">
              <img src="/Assets/phone.png" alt="Phone" className="icon" />
              <span>+62 21 29705400</span>
            </div>
            <div className="contact-detail">
              <img src="/Assets/fax.png" alt="Fax" className="icon" />
              <span>+62 21 29705401</span>
            </div>
            <div className="contact-detail">
              <img src="/Assets/email.png" alt="Email" className="icon" />
              <span>info@whsmaritime.com</span>
            </div>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              className="google-map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.356255771772!2d106.77940707594268!3d-6.262188593723872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a8876aaaab%3A0x759218f415f443d0!2sPondok%20Indah%20Office%20Tower%202!5e0!3m2!1sen!2sid!4v1720420000000!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map WHS"
            ></iframe>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
