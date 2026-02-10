import React from 'react';

const Skills = () => {
  return (
    <section className="portfolio-section">
      <h2>Skills Section</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming: Python, R, SQL</li>
            <li>Data Visualization: Tableau, Power BI, Matplotlib, Plotly</li>
            <li>Tools: Excel, Google Analytics, Jupyter Notebooks, Git</li>
            <li>Other: Machine Learning (Scikit-learn), ETL, Cloud Platforms (AWS, Google Cloud)</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Analytical Thinking & Problem-Solving</li>
            <li>Communication & Data Storytelling</li>
            <li>Team Collaboration & Project Management</li>
            <li>Adaptability & Continuous Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;