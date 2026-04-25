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
          <h4>A Performance and Interpretability Study of Machine Learning Models for SYN Flood Detection (2025)</h4>
          <ul>
            <li><strong>Focus:</strong> Cybersecurity & Trustworthy AI.</li>
            <li><strong>Key Contribution:</strong> Comparative analysis of ML models with a focus on Model Interpretability. Designed feature selection pipelines to identify critical network attack signatures.</li>
            <li><strong>Advisor:</strong> Kwame Owusu Kwarteng</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Improving Investment Optimization Under Inflation and Sovereign Debt Constraints in the Ghanaian Market Using Machine Learning (2025)</h4>
          <ul>
            <li><strong>Focus:</strong> Time-series Forecasting & Economic Modeling.</li>
            <li><strong>Key Contribution:</strong> Developed predictive models for financial optimization in volatile markets (Ghana). Handled complex, high-dimensional economic indicators.</li>
            <li><strong>Advisor:</strong> Prof. Benjamin Ghansah</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Application Of Machine Learning Techniques for Detecting Fraudulent Transactions in Halges Fintech (2025)</h4>
          <ul>
            <li><strong>Focus:</strong> Anomaly Detection & Financial Security.</li>
            <li><strong>Key Contribution:</strong> Developed and deployed predictive models to identify fraudulent patterns in high-frequency transactional data at Halges Fintech.</li>
            <li><strong>Advisor:</strong> Warlali Ametepe</li>
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

      {/* Training and Certifications */}
      <section className="portfolio-section">
        <h2>Training and Certifications</h2>
        <div className="certifications-grid">
          <div className="cert-item">
            <strong>Data Analytics For Climate and Health</strong>
            <span>Centre For Data Science and Analytics/ Ashoka University | 2025</span>
          </div>
          <div className="cert-item">
            <strong>Data Analytics Professional</strong>
            <span>Azubi Africa | 2024</span>
          </div>
          <div className="cert-item">
            <strong>Certified Business Data Analyst</strong>
            <span>Centre For Business Analysis (Accra, Ghana) | 2024</span>
          </div>
          <div className="cert-item">
            <strong>Google Data Analytics</strong>
            <span>Coursera | 2024</span>
          </div>
          <div className="cert-item">
            <strong>Android Development</strong>
            <span>Google Africa Developer Training / Andela | 2024</span>
          </div>
          <div className="cert-item">
            <strong>Software Development Programme</strong>
            <span>Amalitech | 2023</span>
          </div>
          <div className="cert-item">
            <strong>Google Project Management</strong>
            <span>Coursera | 2023</span>
          </div>
          <div className="cert-item">
            <strong>Google IT Support</strong>
            <span>Coursera | 2023</span>
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
          <strong>Data Analyst (BI and Audit Functions)</strong>
          <ul>
            <li>Collect, clean, and analyze large transactional datasets to identify trends, anomalies, and performance gaps.</li>
            <li>Prepare and present monthly executive performance reports to support strategic decision-making.</li>
            <li>Partner with product and finance teams to generate actionable insights that drive operational efficiency.</li>
            <li>Lead daily reconciliation of wallet, bank, and merchant transactions to ensure financial accuracy and system integrity.</li>
            <li>Investigate and resolve transaction discrepancies, improving settlement accuracy with external partners.</li>
            <li>Design and maintain automated reporting dashboards using Excel and SQL, reducing manual reporting time.</li>
            <li>Detect data inconsistencies and strengthen database integrity through validation checks and audit controls.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Docupro Ltd</h3>
            <span>May 2020 - June 2024 | Accra, Ghana</span>
          </div>
          <strong>Lead Quality Assurance Officer</strong>
          <ul>
            <li>Oversaw weekly data quality assurance across multiple client databases and systems.</li>
            <li>Developed monthly validation scripts to detect and correct inconsistent or missing data.</li>
            <li>Monitored data pipelines daily to ensure accuracy, completeness, and timeliness.</li>
            <li>Collaborated with engineers to improve data integration and governance workflows.</li>
            <li>Prepared periodic data quality reports and recommended process enhancements.</li>
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
            <li>Developing and selecting appropriate research plans, research methods, and data analysis tools.</li>
            <li>Analysed and interpreted data using statistical tools like SPSS, R, Stata, PLS-SEM, and analytical techniques like t-tests, MANOVA, and ANCOVA.</li>
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
          <strong>Research Assistant and Head of BSF lab</strong>
          <ul>
            <li>Led Black Soldier Fly (BSF) laboratory operations and experimental setups.</li>
            <li>Collected, analyzed, and interpreted data from BSF growth and waste conversion studies.</li>
            <li>Supervised other research assistants and ensured adherence to lab safety protocols.</li>
            <li>Prepared technical reports and contributed to research publications.</li>
            <li>Supported project design and data analysis for agricultural biotechnology research.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Daasgift Quality Foundation</h3>
            <span>June 2017 - Aug. 2017 | Takoradi, Ghana</span>
          </div>
          <strong>Monitoring & Evaluation (M&E) Intern</strong>
          <ul>
            <li>Collected and analyzed project data to track performance indicators.</li>
            <li>Assisted in preparing weekly M&E reports and documentation for donor submissions.</li>
            <li>Supported field data collection and beneficiary feedback sessions.</li>
            <li>Helped design survey tools and evaluation templates for ongoing projects.</li>
            <li>Contributed to data entry, cleaning, and visualization for impact assessments.</li>
          </ul>
        </div>
      </section>

      {/* Workshops, Webinars & Conferences */}
      <section className="portfolio-section">
        <h2>Workshops, Webinars & Conferences</h2>
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
        <h2>Leadership Roles & Experiences</h2>
        
        <div className="experience-item">
          <div className="exp-header">
            <h3>Halges Financial Technologies Ltd</h3>
            <span>Mar 2026 - Present | Accra, Ghana</span>
          </div>
          <strong>Change Advisory Board Member</strong>
          <ul>
            <li>Risk Assessment: Evaluating how a proposed update might affect existing workflows or data integrity.</li>
            <li>Stakeholder Alignment: Ensuring that changes maintain established visual identity and professional reputation.</li>
            <li>Schedule Coordination: Reviewing the "Change Calendar" to ensure updates do not conflict with major events.</li>
            <li>Post-Implementation Review (PIR): Analyzing desired outcomes and documenting lessons learned for future cycles.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <h3>Halges Financial Technologies Ltd</h3>
            <span>July 2024 - Present | Accra, Ghana</span>
          </div>
          <strong>User Acceptance Testing (UAT) Team Member</strong>
          <ul>
            <li>Test Case Development: Creating scenarios based on user requirements.</li>
            <li>User Feedback Synthesis: Managing pilot groups to gather qualitative data on UI/UX.</li>
            <li>Defect Management: Using tools like GitHub issues to track and resolve functional gaps.</li>
            <li>Final Sign-off: Providing the formal "Go/No-Go" recommendation before platform launches.</li>
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
            <li>Oversaw end-to-end project execution, from problem definition to model deployment.</li>
            <li>Guided junior analysts through technical reviews, mentoring, and skill development.</li>
            <li>Trained and mentored at least 15 data analysts and scientists.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Achievements;