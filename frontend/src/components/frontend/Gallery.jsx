import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
//import Header from "@components/frontend/pages/Header";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from '@components/frontend/pages/Header_ns';


// src/assets/css/main.scss
const images = [
  { src: '/images/metaldetector.jpg', label: 'Metal Detector' },
  { src: '/images/whs iskandar.jpg', label: 'Floating Terminal' },
  { src: '/images/floatingcrane.jpg', label: 'Floating Crane' },
  { src: '/images/TBprime.jpg', label: 'TB PRIME' },
];

const Gallery = () => {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const openFullscreen = (index) => setFullscreenIndex(index);
  const closeFullscreen = () => setFullscreenIndex(null);
  const prevImage = () => setFullscreenIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setFullscreenIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Header_ns />

      <div className="gallery">
        {images.map((img, index) => (
          <div className="image-card" key={index} onClick={() => openFullscreen(index)}>
            <img className="image" src={img.src} alt={img.label} />
            <div className="dark-overlay" />
            <div className="overlay-text">
              {img.label}
              <div className="underline" />
            </div>
          </div>
        ))}
      </div>

      {fullscreenIndex !== null && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <button
            className="arrow left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FiChevronLeft size={36} />
          </button>

          <img
            className="fullscreen-image"
            src={images[fullscreenIndex].src}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FiChevronRight size={36} />
          </button>

          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
          >
            &times;
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Gallery;
