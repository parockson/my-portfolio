import React from 'react';

const Testimonials = () => {
  return (
    <section className="portfolio-section">
      <h2>Testimonials / References</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <blockquote>
          <p>"Alex's analytical skills and attention to detail helped us turn data into profits. A true asset to any team."</p>
          <footer>Sarah Lee, CEO, RetailTech Inc.</footer>
        </blockquote>
        <blockquote>
          <p>"Working with Alex on our churn project was a game-changer. Their insights were spot-on and delivered on time."</p>
          <footer>Dr. Michael Chen, Data Science Lead, Telecom Solutions.</footer>
        </blockquote>
      </div>
      <p>References available upon request.</p>
    </section>
  );
};

export default Testimonials;