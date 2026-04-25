import React from 'react';
import cvFile from '../assets/prince_rockson cv.pdf';

const Resume = () => {
  return (
    <section className="portfolio-section" id="resume">
      <h2>Resume / CV</h2>
      <p>Download my full resume here: <a href={cvFile} download="Prince_Rockson_CV.pdf">Prince_Rockson_CV.pdf</a></p>
      <p>This provides a comprehensive overview of my experience, education, and qualifications.</p>
    </section>
  );
};

export default Resume;