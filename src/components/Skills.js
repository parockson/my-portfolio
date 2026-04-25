import React from 'react';

const Skills = () => {
  return (
    <section className="portfolio-section" id="skills">
      <h2>Skills and Languages</h2>
      <div className="skills-container">
        <div>
          <h3>Computational Research & Data Science</h3>
          <ul>
            <li><strong>Languages:</strong> Python (Advanced: NumPy, Pandas, Scikit-learn, XGBoost, Matplotlib, Seaborn), R (Statistical Modeling), SQL (PostgreSQL, MySQL).</li>
            <li><strong>Statistical Analysis:</strong> SPSS, Stata, PLS-SEM, Excel.</li>
            <li><strong>Specialized AI:</strong> Machine Learning Model Validation (Bootstrapping, Cross-Validation), Explainable AI (SHAP/LIME).</li>
          </ul>
        </div>
        <div>
          <h3>Software Engineering & Deployment</h3>
          <ul>
            <li><strong>Web & App:</strong> React JS/TS, Node.js, Streamlit (for ML Dashboarding).</li>
            <li><strong>DevOps & Infrastructure:</strong> Git/GitHub, Netlify, Render, Railway, Vercel.</li>
            <li><strong>IT Architecture:</strong> ITIL Frameworks, Cloud Computing Service Lifecycle.</li>
          </ul>
        </div>
        <div>
          <h3>Data Visualization & Business Intelligence</h3>
          <ul>
            <li><strong>Tools:</strong> Power BI, Advanced Excel (VBA/Macros), Tableau.</li>
          </ul>
        </div>
        <div>
          <h3>Languages</h3>
          <ul>
            <li><strong>English:</strong> Native / Professional Fluency (Full Research Proficiency).</li>
            <li><strong>Local Languages:</strong> Asante Twi, Fante, Ga.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;