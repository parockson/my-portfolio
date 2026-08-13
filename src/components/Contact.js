import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xvzdyaae", { 
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="portfolio-section" id="contact">
      <h2>Contact</h2>
      <p>Ready to collaborate on your next data project? Let's connect!</p>
      <p>Kindly fill the form below to send me a direct mail.</p>
      
      <form 
        className="contact-form" 
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xvzdyaae" 
        method="POST"
      >
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
        {status === "SUCCESS" && <p className="success-msg">Message sent successfully!</p>}
        {status === "ERROR" && <p className="error-msg">Oops! There was an error.</p>}
      </form>
    </section>
  );
};

export default Contact;