import React, { useState } from 'react';
import '../styles/join.css';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Thank you! Your application has been received. We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="join-page">
      <div className="join-container">
        <div className="join-header">
          <h1 className="page-title">Join the Movement</h1>
          <p className="join-subtitle">
            Become part of the most exciting tech community on campus
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> hello@msclub.edu
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Microsoft Student Club
            </a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong> Tech University Campus, Building A-204
          </div>
        </div>

        <form onSubmit={handleSubmit} className="join-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Alex Rivera"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@university.edu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Why do you want to join?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="I'm passionate about AI and want to build impactful projects..."
              rows="5"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
};

export default Join;

