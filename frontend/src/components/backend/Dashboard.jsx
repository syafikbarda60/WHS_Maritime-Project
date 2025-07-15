import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@components/frontend/pages/Footer";
import Header_ns from "@components/frontend/pages/Header_ns";
import { AuthContext } from "@components/backend/context/Auth";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    short_desc: "",
    content: "",
    stats: 0,
    img: null,
  });

  const token = JSON.parse(localStorage.getItem("userInfo"))?.token;

  // Fetch Services
  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const result = await res.json();
      if (result.status) setServices(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:8000/api/services", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      });

      const result = await res.json();
      if (result.status) {
        alert("Service added");
        setFormData({
          title: "",
          slug: "",
          short_desc: "",
          content: "",
          stats: 0,
          img: null,
        });
        fetchServices();
      } else {
        alert("Failed to add service");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/services/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (result.status) {
        fetchServices();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header_ns />
      <main style={{ paddingTop: "80px" }}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="mb-4">Sidebar</h4>
                  <ul className="list-group list-group-flush">
                    {/*<li className="list-group-item p-0 mb-2">
                      <a href="#" className="btn btn-link text-start">
                        Dashboard
                      </a>
                    </li>*/}
                    
                    {/*<li className="list-group-item p-0 mb-2">
                      <a href="#" className="btn btn-link text-start">
                        News
                      </a>
                    </li>*/}
                    <li className="list-group-item p-0">
                      <button
                        className="btn btn-danger w-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="card border-0 shadow p-4">
                <h4 className="mb-3">Add Service</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    {/*  
                    <div className="col-md-6 mb-2">
                      <label>Slug</label>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                     */}
                    <div className="col-12 mb-2">
                      <label>Short Description</label>
                      <textarea
                        name="short_desc"
                        value={formData.short_desc}
                        onChange={handleChange}
                        className="form-control"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mb-2">
                      <label>Content</label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="col-md-6 mb-2">
                      <label>Image</label>
                      <input
                        type="file"
                        name="img"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <label>Stats</label>
                      <input
                        type="number"
                        name="stats"
                        value={formData.stats}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                <hr className="my-4" />

                <h4>All Services</h4>
                {loading ? (
                  <p>Loading...</p>
                ) : services.length === 0 ? (
                  <p>No services found.</p>
                ) : (
                  <div className="row">
                    {services.map((s) => (
                      <div className="col-md-6 mb-3" key={s.id}>
                        <div className="card h-100">
                          <img
                            src={`http://localhost:8000/storage/${s.img}`}
                            className="card-img-top"
                            alt={s.title}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{s.title}</h5>
                            <p className="card-text">{s.short_desc}</p>
                            <p className="card-text">
                              <small className="text-muted">
                                Views: {s.stats}
                              </small>
                            </p>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteService(s.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
