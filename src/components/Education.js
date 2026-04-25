import React from 'react';

const Education = () => {
  return (
    <section className="portfolio-section" id="education">
      <h2>Education</h2>
      
      <div className="experience-item">
        <div className="exp-header">
          <h3>Kwame Nkrumah University of Science and Technology</h3>
          <span>Jan. 2024 - Nov. 2025 | Kumasi, Ghana</span>
        </div>
        <strong>Master of Science (MSc) - Health Informatics</strong>
      </div>

      <div className="experience-item">
        <div className="exp-header">
          <h3>University of Cape Coast</h3>
          <span>Sept. 2014 - May 2018 | Cape Coast, Ghana</span>
        </div>
        <strong>Bachelor of Science (BSc) - Molecular Biology and Biotechnology</strong>
      </div>
    </section>
  );
};

export default Education;
