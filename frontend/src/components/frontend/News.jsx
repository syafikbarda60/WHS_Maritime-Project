import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [newsItem, setNewsItem] = useState(null);

  const { id } = useParams();

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

  if (!newsItem) return <p>Loading...</p>;

  return (
    <>
      <Header_ns />
      <main style={{ paddingTop: "100px" }}>
        <div className="news-detail-container">
          <article className="main-article">
            <h1>{newsItem.title}</h1>
            <p className="meta">
              {new Date(newsItem.created_at).toLocaleDateString()} · By Author ·
              1234 views
            </p>

            <div className="carousel-wrapper">
              <Carousel
                fade
                indicators={true}
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
              <p>
                (Tambahkan field `description` dari database jika tersedia untuk
                isi lengkapnya.)
              </p>
            </div>

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
          </article>

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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
