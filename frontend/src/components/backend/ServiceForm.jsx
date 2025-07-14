import React, { useState } from 'react';

const ServiceForm = ({ onCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    short_desc: '',
    content: '',
    img: '',
    stats: 0,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    try {
      const res = await fetch('http://localhost:8000/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.status) {
        alert('Service added successfully!');
        onCreated(); // panggil ulang list jika ada
        setFormData({
          title: '',
          slug: '',
          short_desc: '',
          content: '',
          img: '',
          stats: 0,
        });
      } else {
        alert('Error: ' + JSON.stringify(result.errors || result.message));
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h5>Add New Service</h5>
      {['title', 'slug', 'short_desc', 'content', 'img', 'stats'].map((field) => (
        <div className="mb-2" key={field}>
          <label className="form-label">{field.replace('_', ' ').toUpperCase()}</label>
          <input
            type={field === 'stats' ? 'number' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="form-control"
            required={field !== 'img'}
          />
        </div>
      ))}
      <button className="btn btn-primary" disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default ServiceForm;
