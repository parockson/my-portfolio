import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('portfolioProjects')) || [
      // Default projects (if none in storage)
      {
        id: 1,
        title: 'E-Commerce Sales Dashboard',
        description: 'Developed a real-time dashboard...',
        tools: 'Python (Pandas, Matplotlib), SQL, Tableau, ETL processes.',
        impact: 'The dashboard reduced reporting time by 50%...',
        link: 'https://tableau.public.com/views/SalesDashboard',
        linkText: 'View live demo'
      },
      // Add other defaults as needed
    ];
    setProjects(storedProjects);
  }, []);

  return (
    <section className="portfolio-section">
      <h2>Work Samples / Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h5>{project.title}</h5>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Tools/Skills Used:</strong> {project.tools}</p>
            <p><strong>Outcome/Impact:</strong> {project.impact}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkText}</a>}
          </div>
        ))}
      </div>
      <p>For more projects, visit my <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </section>
  );
};

export default Projects;