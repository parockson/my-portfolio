import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/parockson/repos?sort=updated&per_page=10');
        const data = await response.json();
        
        const formattedProjects = data
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || 'Professional portfolio project and codebase.',
            tools: repo.language || 'Codebase',
            impact: `Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count}`,
            link: repo.html_url,
            linkText: 'View on GitHub',
            // Using a dynamic placeholder for the project image
            image: `https://raw.githubusercontent.com/github/explore/main/topics/${repo.language?.toLowerCase() || 'github'}/${repo.language?.toLowerCase() || 'github'}.png`
          }));
        
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchGithubProjects();
  }, []);

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
    <section className="portfolio-section" id="work">
      <h2>Work Samples & Projects</h2>
      <p>A collection of my recent projects, data analysis work, and software contributions.</p>
      
      <div className="gallery-container">
        <button className="nav-btn prev" onClick={() => scroll('left')} aria-label="Previous">
          &#10094;
        </button>
        
        <div className="gallery-slider" ref={scrollRef}>
          {projects.map((project) => (
            <div key={project.id} className="gallery-item">
              <div className="gallery-image-container" style={{ background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="gallery-image" 
                  style={{ width: '100px', height: '100px', objectFit: 'contain', opacity: 0.7 }}
                  onError={(e) => { e.target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'; }}
                />
              </div>
              <div className="gallery-overlay">
                <h5>{project.title}</h5>
                <p><strong>Tools:</strong> {project.tools}</p>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkText}
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
      <p style={{ marginTop: '20px' }}>Explore all my contributions on <a href="https://github.com/parockson" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </section>
  );
};

export default Projects;