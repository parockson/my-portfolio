import React, { useRef } from 'react';

const Gallery = () => {
  const scrollRef = useRef(null);

  const galleryItems = [
    { id: 1, image: 'https://via.placeholder.com/400x300?text=Sales+Dashboard', title: 'E-Commerce Dashboard', description: 'Interactive Tableau sales tracking.', link: '#', linkText: 'View Demo' },
    { id: 2, image: 'https://via.placeholder.com/400x300?text=Churn+Model', title: 'Churn Prediction', description: 'Python-based customer retention model.', link: '#', linkText: 'View Code' },
    { id: 3, image: 'https://via.placeholder.com/400x300?text=COVID+App', title: 'COVID-19 Tracker', description: 'Global vaccination data visualization.', link: '#', linkText: 'View App' },
    { id: 4, image: 'https://via.placeholder.com/400x300?text=Certificate', title: 'Google Analytics Cert', description: 'Professional Certification - 2022.', link: null, linkText: null },
    { id: 5, image: 'https://via.placeholder.com/400x300?text=NLP+Project', title: 'Sentiment Analysis', description: 'NLP model for processing Twitter data.', link: '#', linkText: 'View Repo' },
    { id: 6, image: 'https://via.placeholder.com/400x300?text=SQL+Optimization', title: 'SQL Query Tuning', description: 'Improving database performance by 40%.', link: '#', linkText: 'Read Blog' },
    { id: 7, image: 'https://via.placeholder.com/400x300?text=Financial+Report', title: 'Financial Forecasting', description: 'Time-series analysis for stock trends.', link: '#', linkText: 'View Report' },
    { id: 8, image: 'https://via.placeholder.com/400x300?text=Supply+Chain', title: 'Logistics Dashboard', description: 'PowerBI supply chain optimization.', link: '#', linkText: 'View Demo' },
    { id: 9, image: 'https://via.placeholder.com/400x300?text=Machine+Learning', title: 'Image Classifier', description: 'TensorFlow model for object detection.', link: '#', linkText: 'View Code' },
    { id: 10, image: 'https://via.placeholder.com/400x300?text=Python+Script', title: 'Automation Bot', description: 'Web scraping and email automation tool.', link: '#', linkText: 'View Repo' }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // 300px (card width) + 24px (gap: 1.5rem)
      const scrollAmount = 324; 
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="portfolio-section">
      <h2>Gallery</h2>
      <p>Visual highlights from my projects and achievements.</p>
      
      <div className="gallery-container">
        <button className="nav-btn prev" onClick={() => scroll('left')} aria-label="Previous">
          &#10094;
        </button>
        
        <div className="gallery-slider" ref={scrollRef}>
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={() => scroll('right')} aria-label="Next">
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Gallery;