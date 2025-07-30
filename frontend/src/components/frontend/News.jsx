import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [newsItem, setNewsItem] = useState(null);

  const { id } = useParams();

  const capitalizeFirst = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/services");
        const result = await res.json();
        if (result.status) {
          setNewsItems(result.data);
          const item = result.data.find((n) => n.id.toString() === id);
          setNewsItem(item || result.data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };

    fetchNews();
  }, [id]);

  if (!newsItem)
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
          <div
            className="spinner-border text-danger"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="mt-3 loading-text">Loading...</div>
        </div>

        <style>{`
        .loading-text {
          font-size: 1.5rem;
          color: #d91d1d;
          animation: pulse 1.5s infinite ease-in-out;
          font-weight: bold;
          letter-spacing: 1px;
        }

        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(1); }
        }
      `}</style>
      </>
    );

  return (
    <>
      <Header_ns />

      <main style={{ paddingTop: "3.5rem" }}>
        <div className="news-detail-container">
          <article className="main-article">
            <h1>{newsItem.title}</h1>
            <p className="meta">
              {new Date(newsItem.created_at).toLocaleDateString()} · By Author ·
            </p>

            <div className="carousel-wrapper">
              <Carousel
                fade
                indicators={false}
                controls={false}
                interval={2000}
                className="custom-carousel"
              >
                {[1, 2, 3].map((_, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100 carousel-img"
                      src={`http://localhost:8000/storage/${newsItem.img}`}
                      alt={newsItem.title}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className="content">
              <p>{newsItem.short_desc}</p>

              {/* Konten dengan format otomatis */}
              {newsItem.content.includes("<") ? (
                <div
                  className="formatted-content"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
              ) : (
                newsItem.content
                  .split(/\n\s*\n/) // pisah per 2 newline jadi paragraf
                  .map((para, idx) => (
                    <p key={idx} className="paragraph">
                      {capitalizeFirst(para.trim())}
                    </p>
                  ))
              )}
            </div>
          </article>
          {/*   
            <section className="comments">
              <h3>0 Comments</h3>
              <div className="comment">Belum ada komentar.</div>
            </section>

            <section className="comment-form">
              <h3>Leave a Comment</h3>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Comment"></textarea>
                <button type="submit">Submit</button>
              </form>
            </section>
          

          <aside className="sidebar">
            <div className="follow-us">
              <h4>Follow Us</h4>
              <button>Connect with Us</button>
              <button>Follow Us</button>
            </div>

            <div className="ads">
              <h4>Advertisement</h4>
              <div className="ad-box">Ad Space</div>
            </div>

            <div className="trending-news">
              <h4>Trending News</h4>
              <ul>
                {newsItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="categories">
              <h4>Category</h4>
              <button>Category 1</button>
              <button>Category 2</button>
            </div>
          </aside>
          */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
