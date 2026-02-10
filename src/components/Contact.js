    import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent. (Demo only – integrate with a real service.)`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="portfolio-section">
      <h2>Contact / Call-to-Action</h2>
      <p>Ready to collaborate on your next data project? Let's connect!</p>
      <p>Email me at <a href="mailto:alex.johnson@email.com">alex.johnson@email.com</a> or message me on <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <p>View my full GitHub for code samples and more projects: <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">github.com/alexjohnson</a>. Let's build something impactful together!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;