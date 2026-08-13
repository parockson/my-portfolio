import React from 'react';

const Achievements = () => {
  return (
    <div className="experience-wrapper">
      {/* Research Experience */}
      <section className="portfolio-section">
        <h2>Research Experience</h2>
        <div className="experience-item">
          <h4>Development and Validation of an Explainable Framework for 6-Class Chronic Kidney Disease Staging: A Computational Diagnostic Study</h4>
          <p className="status">Status: Manuscript submitted to BMC Medical Informatics and Decision Making (Awaiting Preprint)</p>
          <ul>
            <li><strong>Key Contribution:</strong> Engineered a multi-stage diagnostic framework using Gradient Boosting Machine, LightGBM, XGBoost, and others. Implemented 100-iteration bootstrapping for stability and SHAP for clinical interpretability.</li>
            <li><strong>Role:</strong> Principal Researcher / Lead ML Architect.</li>
            <li><strong>Advisor:</strong> Dr. Eric Osei Opoku</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Detection Of Genetically Modified Products Using PCR (2018)</h4>
          <ul>
            <li><strong>Focus:</strong> Biotechnology / Molecular Biology</li>
            <li><strong>Key Contribution:</strong> Performed laboratory-scale genomic analysis; established the "wet-lab" foundation that informs my current understanding of molecular health data.</li>
            <li><strong>Advisor/Supervisor:</strong> Dr. Emmanuel Plas Otwe</li>
          </ul>
        </div>
      </section>

      {/* Peer Review Profiling */}
      <section className="portfolio-section">
        <h2>Peer Review Profiling</h2>
        <div className="experience-item">
          <div className="exp-header">
            <h3>RESPECT 2025 Conference</h3>
            <span>2025</span>
          </div>
          <ul>
            <li>Evaluating research submissions focused on equity and computer science education research.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>ACM — Association for Computing Machinery</h3>
            <span>2025</span>
          </div>
          <ul>
            <li>Evaluating research submissions focused on equity and computer science education research.</li>
          </ul>
        </div>
      </section>

      {/* Training and Certifications */}
      <section className="portfolio-section">
        <h2>Training and Certifications</h2>
        <div className="certifications-grid">
          <div className="cert-item">
            <strong>Data Analytics For Climate and Health</strong>
            <span>Centre For Data Science and Analytics / Ashoka University | Virtual | Sep. 2025</span>
          </div>
          <div className="cert-item">
            <strong>Data Analytics Professional</strong>
            <span>Azubi Africa | Virtual | Aug. 2024</span>
          </div>
          <div className="cert-item">
            <strong>Google Data Analytics</strong>
            <span>Coursera | Virtual | May 2024</span>
          </div>
          <div className="cert-item">
            <strong>Google Project Management</strong>
            <span>Coursera | Virtual | 2023</span>
          </div>
          <div className="cert-item">
            <strong>Google IT Support</strong>
            <span>Coursera | Virtual | Jun. 2023</span>
          </div>
          <div className="cert-item">
            <strong>Software Development Programme</strong>
            <span>Amalitech | Virtual | Sep. 2023</span>
          </div>
          <div className="cert-item">
            <strong>Certified Business Data Analyst</strong>
            <span>Centre For Business Analysis (Accra, Ghana) | Aug. 2022</span>
          </div>
          <div className="cert-item">
            <strong>Android Development</strong>
            <span>Google Africa Developer Training / Andela | Virtual | May 2022</span>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="portfolio-section">
        <h2>Professional Experience</h2>
        
        <div className="experience-item">
          <div className="exp-header">
            <h3>Halges Financial Technologies (Korba)</h3>
            <span>June 2024 - Present | Accra, Ghana</span>
          </div>
          <strong>Data Scientist (BI, Audit &amp; Transaction Intelligence Functions)</strong>
          <ul>
            <li>Engineered a Python and Streamlit SLA audit platform that automates pricing compliance verification across multi-segment transactions; reduced manual validation overhead by 60% while eliminating revenue leakage.</li>
            <li>Designed automated data quality pipelines and statistical validation checks across SQL/Python environments, identifying transactional discrepancies and strengthening database integrity across high-volume banking, wallet, and merchant ledgers.</li>
            <li>Developed an automated Python ingestion engine that processes raw transactional data, executing dynamic schema mapping, business-logic segmentation, and statistical pivot aggregations with interactive Plotly data visualizations.</li>
            <li>Implemented a rule-based Machine Learning/Python decision engine to classify and rank Change Advisory Board (CAB) requests based on multi-factor risk assessments and operational urgency metrics.</li>
            <li>Built scalable dashboard solutions featuring dynamic column mapping, automated error correction, and multi-sheet automated reporting, replacing legacy Excel workflows and significantly reducing time-to-insight.</li>
            <li>Partnered cross-functionally with Product and Finance teams to translate complex transactional datasets into executive-level KPIs, driving operational efficiency and supporting strategic decision-making.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Docupro Ltd</h3>
            <span>May 2020 - June 2024 | Accra, Ghana</span>
          </div>
          <strong>Lead Health Data Quality Analyst</strong>
          <ul>
            <li>Engineered automated Python and SQL validation scripts to audit large-scale, heterogeneous national health datasets, systematically detecting and resolving missingness, duplications, and structural anomalies.</li>
            <li>Monitored and optimized enterprise ETL data pipelines, ensuring strict adherence to data governance protocols for completeness, schema consistency, latency reduction, and downstream analytical readiness.</li>
            <li>Directed weekly quality control protocols across distributed national healthcare databases, establishing standardized data profiling techniques to preserve signal integrity for clinical and operational analytics.</li>
            <li>Partnered with data engineers and health domain experts to redesign data integration workflows, enhancing systemic validation logic and enterprise-level data governance.</li>
            <li>Authored comprehensive national health data quality reports, delivering statistical insights and algorithmic process improvements to senior leadership to strengthen decision support systems.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>S.K. Consult</h3>
            <span>Mar 2020 - Dec. 2023 | Cape Coast, Ghana</span>
          </div>
          <strong>Associate Consultant</strong>
          <ul>
            <li>Collaborated with at least 100 clients to define their research topics, objectives, and scope.</li>
            <li>Collected quantitative and qualitative data through surveys and interviews for at least 100 clients.</li>
            <li>Developed and selected appropriate research plans, research methods, and data analysis tools.</li>
            <li>Analysed and interpreted both primary and secondary quantitative/qualitative data using statistical tools like SPSS, R, Stata, PLS-SEM, and analytical techniques like t-tests, MANOVA, and ANCOVA.</li>
            <li>Generated reports and presented findings with appropriate visual representations.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Parockson Digital Solutions</h3>
            <span>March 2019 - Present | Accra, Ghana</span>
          </div>
          <strong>Head of Projects</strong>
          <ul>
            <li>Leading end-to-end planning and execution of software and AI research projects.</li>
            <li>Supervising cross-functional teams to deliver client solutions on schedule.</li>
            <li>Managing project budgets, timelines, and stakeholder communications.</li>
            <li>Oversaw the design and rollout of digital solutions for clients.</li>
            <li>Ensured quality assurance and documentation for all completed projects.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Biotechnology and Nuclear Agriculture Research Institute</h3>
            <span>Sep. 2018 - May. 2020 | Accra, Ghana</span>
          </div>
          <strong>Research Assistant and Overseer of BSF Lab (NSS and Volunteer)</strong>
          <ul>
            <li>Designed and executed controlled bio-conversion experiments on Black Soldier Fly (BSF) growth optimization; applied biostatistical techniques to model biomass accumulation and organic waste conversion rates.</li>
            <li>Cleaned, structured, and analyzed complex experimental datasets using quantitative research methodologies, translating raw biological metrics into statistical trends and actionable scientific insights.</li>
            <li>Partnered on cross-functional biotechnology projects, contributing to experimental setup, statistical hypothesis testing, and quantitative modeling for sustainable agricultural systems.</li>
            <li>Directed daily BSF laboratory workflows and supervised junior research assistants, enforcing data integrity standards, rigorous laboratory protocols, and experimental quality control.</li>
            <li>Co-authored technical reports and scientific manuscript drafts, transforming complex biological findings and statistical outputs into executive summaries and publication-ready documentation.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Daasgift Quality Foundation</h3>
            <span>June 2017 - Aug. 2017 | Takoradi, Ghana</span>
          </div>
          <strong>Monitoring &amp; Evaluation (M&amp;E) Intern</strong>
          <ul>
            <li>Collected and analysed project data to track performance indicators.</li>
            <li>Assisted in preparing weekly M&amp;E reports and documentation for donor submissions.</li>
            <li>Supported field data collection and beneficiary feedback sessions.</li>
            <li>Helped design survey tools and evaluation templates for ongoing projects.</li>
            <li>Contributed to data entry, cleaning, and visualisation for impact assessments.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Justab Hospital</h3>
            <span>June 2016 - Aug. 2016 | Accra, Ghana</span>
          </div>
          <strong>Medical Lab Intern</strong>
          <ul>
            <li>Assisted with specimen reception, preparation, and routine laboratory workflow under supervision.</li>
            <li>Supported basic diagnostic procedures, reagent preparation, and equipment cleaning in line with laboratory safety standards.</li>
            <li>Maintained accurate records and observed quality control practices in medical laboratory operations.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Justab Hospital</h3>
            <span>June 2015 - Aug. 2015 | Accra, Ghana</span>
          </div>
          <strong>Medical Lab Intern</strong>
          <ul>
            <li>Supported laboratory sample handling, preparation, and documentation for routine clinical investigations.</li>
            <li>Observed and assisted with basic haematology, microbiology, and clinical chemistry workflows under supervision.</li>
            <li>Practised laboratory safety, infection prevention, and proper handling of biological specimens.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Deogratias Institute</h3>
            <span>July 2013 - Sep. 2014 | Kasoa, Ghana</span>
          </div>
          <strong>Teacher</strong>
          <ul>
            <li>Designed and administered standardized evaluation frameworks to measure learner progress; analyzed student academic performance metrics to identify learning gaps and optimize instructional delivery.</li>
            <li>Maintained structured data logging systems for student attendance, grade tracking, and performance records, ensuring accurate record-keeping and data accessibility.</li>
            <li>Developed structured lesson plans and technical learning modules, translating complex subject matter into clear, digestible concepts for diverse student audiences.</li>
            <li>Mentored students in academic development and critical thinking; facilitated collaborative problem-solving and maintained structured communication with stakeholders to support learning outcomes.</li>
          </ul>
        </div>
      </section>

      {/* Workshops, Webinars & Conferences */}
      <section className="portfolio-section">
        <h2>Workshops, Webinars &amp; Conferences</h2>
        <div className="experience-item">
          <div className="exp-header">
            <h3>Faculty of Physical and Computational Sciences PosterFest</h3>
            <span>Aug 2025 | Kumasi, Ghana</span>
          </div>
          <strong>Presenter: "Detection and Staging of Chronic Kidney Disease: A Step Toward Preventive Nephrology."</strong>
          <ul>
            <li>Highlighted the integration of Machine Learning for subclinical diagnosis in resource-limited settings.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Centre for Business Analysis</h3>
            <span>Aug 2025 | Virtual</span>
          </div>
          <strong>Invited Speaker: "The Future of Data Analytics: How Certifications Keep Us Relevant."</strong>
          <ul>
            <li>Discussed the evolving landscape of AI and the necessity of continuous skill acquisition in data science.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>ASPIRE 2025 Program</h3>
            <span>Aug 2025 | Virtual</span>
          </div>
          <strong>Keynote Speaker: "Telling the Data Story."</strong>
          <ul>
            <li>Trained emerging professionals on data visualization and communicating complex insights to non-technical stakeholders.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Bayobab Africa</h3>
            <span>Aug - Nov 2025 | Virtual</span>
          </div>
          <strong>Technical Speaker: "ITIL Frameworks and Cloud Computing Service Life Cycles."</strong>
          <ul>
            <li>Delivered a modular series on service improvement, stakeholder management, and cloud infrastructure roles.</li>
          </ul>
        </div>
      </section>

      {/* Leadership Roles & Experiences */}
      <section className="portfolio-section">
        <h2>Leadership Roles &amp; Experiences</h2>
        
        <div className="experience-item">
          <div className="exp-header">
            <h3>Halges Financial Technologies Ltd</h3>
            <span>Mar 2026 - Present | Accra, Ghana</span>
          </div>
          <strong>Change Advisory Board Member</strong>
          <ul>
            <li>Risk Assessment: Evaluating how a proposed update might affect existing workflows or data integrity.</li>
            <li>Stakeholder Alignment: Ensuring that changes to communication channels or branding assets maintain the established visual identity and professional reputation.</li>
            <li>Schedule Coordination: Reviewing the "Change Calendar" to ensure updates do not conflict with major events.</li>
            <li>Post-Implementation Review (PIR): Analyzing whether a change achieved its desired outcome and documenting lessons learned to improve future deployment cycles.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Halges Financial Technologies Ltd</h3>
            <span>July 2024 - Present | Accra, Ghana</span>
          </div>
          <strong>User Acceptance Testing (UAT) Team Member</strong>
          <ul>
            <li>Test Case Development: Creating detailed scenarios based on user requirements.</li>
            <li>User Feedback Synthesis: Managing pilot groups of alumni to gather qualitative data on UI/UX and translating that into actionable bug reports for developers.</li>
            <li>Defect Management: Using tools like GitHub issues to track functional gaps, ensuring the final product reflects the intended branding and professional standards.</li>
            <li>Final Sign-off: Providing the formal "Go/No-Go" recommendation before a platform or tool is launched to the wider network.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Jospong ICT Data Science Team for Shared Services</h3>
            <span>Jan 2024 - Present | Accra, Ghana</span>
          </div>
          <strong>Team Lead</strong>
          <ul>
            <li>Led a cross-functional data science team delivering analytics and automation solutions for shared services units.</li>
            <li>Oversaw end-to-end project execution, from problem definition and data collection to model development, validation, and deployment.</li>
            <li>Guided junior analysts through technical reviews, mentoring, and skill development.</li>
            <li>Trained and mentored at least 15 data analysts and scientists for shared services.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Achievements;