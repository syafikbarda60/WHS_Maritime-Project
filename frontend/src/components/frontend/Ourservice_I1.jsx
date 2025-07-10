import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Header from '@components/frontend/pages/Header';
import Footer from '@components/frontend/pages/Footer';

const Ourservice_I1 = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel fade controls={false} indicators={false} interval={5000} pause={false}>
          <Carousel.Item>
            <div
              className="hero"
              style={{
                backgroundImage: "url('/images/tb2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                minHeight: '500px',
              }}
            >
              <div
                className="overlay"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%' }}
              >
                <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
                  <div className="hero-content text-center text-white">
                    <h1>
                      HOMOGENOUSLY <span style={{ color: '#d91d1d' }}>BLENDED</span>
                    </h1>
                    <h3>
                      Desired Coal <span style={{ color: '#d91d1d' }}>Product</span>
                    </h3>
                    <p>We envisage to deliver …</p>
                    <Button variant="primary">Learn More</Button>
                  </div>
                </div>
              </div>

              {/* Tambahkan wave di bawah */}
              <div
                className="hero-wave"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  lineHeight: 0,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#d91d1d"
                    fillOpacity="1"
                    d="M0,32L11.4,58.7C22.9,85,46,139,69,154.7C91.4,171,114,149,137,117.3C160,85,183,43,206,69.3C228.6,96,251,192,274,213.3C297.1,235,320,181,343,138.7C365.7,96,389,64,411,85.3C434.3,107,457,181,480,224C502.9,267,526,277,549,266.7C571.4,256,594,224,617,213.3C640,203,663,213,686,208C708.6,203,731,181,754,144C777.1,107,800,53,823,37.3C845.7,21,869,43,891,96C914.3,149,937,235,960,229.3C982.9,224,1006,128,1029,106.7C1051.4,85,1074,139,1097,181.3C1120,224,1143,256,1166,240C1188.6,224,1211,160,1234,154.7C1257.1,149,1280,203,1303,208C1325.7,213,1349,171,1371,149.3C1394.3,128,1417,128,1429,128L1440,128L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </main>
      <Footer />
    </>
  );
};

export default Ourservice_I1;
