import React, { useRef } from 'react';

// Import images (Assuming they will be saved in assets/gallery)
// For now using descriptive placeholders that point to the expected local assets
const Gallery = () => {
  const scrollRef = useRef(null);

  const galleryItems = [
    { id: 1, image: require('../assets/gallery/agric_research.jpg'), title: 'Agric Research', description: 'KNUST Field research in agriculture.' },
    { id: 2, image: require('../assets/gallery/casual_portrait.jpg'), title: 'Casual Portrait', description: 'Professional yet approachable.' },
    { id: 3, image: require('../assets/gallery/artistic_bw.jpg'), title: 'B&W Portrait', description: 'Artistic side profile.' },
    { id: 4, image: require('../assets/gallery/formal_headshot.jpg'), title: 'Professional Headshot', description: 'Formal business attire.' },
    { id: 5, image: require('../assets/gallery/research_presentation.jpg'), title: 'Research Presentation', description: 'Presenting psychology research findings.' },
    { id: 6, image: require('../assets/gallery/poster_detail.jpg'), title: 'Poster Detail', description: 'Detailed view of research data.' },
    { id: 7, image: require('../assets/gallery/studio_formal.jpg'), title: 'Studio Portrait', description: 'Professional studio session.' },
    { id: 8, image: require('../assets/gallery/studio_alt.jpg'), title: 'Studio Variation', description: 'Alternative studio pose.' },
    { id: 9, image: require('../assets/gallery/dark_profile.jpg'), title: 'Dark Profile', description: 'Minimalist dark background portrait.' },
    { id: 10, image: require('../assets/gallery/graduation_joy.jpg'), title: 'Graduation Day', description: 'Celebrating academic achievement.' },
    { id: 11, image: require('../assets/gallery/formal_graduation.jpg'), title: 'Formal Graduation', description: 'Seated graduation portrait.' },
    { id: 12, image: require('../assets/gallery/victory_pose.jpg'), title: 'Victory Pose', description: 'Degree in hand, celebrating success.' },
    { id: 13, image: require('../assets/gallery/library_milestone.jpg'), title: 'Library Milestone', description: 'Achievement in the world of books.' }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 324; 
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="portfolio-section" id="gallery">
      <h2>Gallery</h2>
      <p>A visual journey through my academic milestones and professional growth.</p>
      
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