import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Product Builder</h4>
                <h5>UrbaMart</h5>
              </div>
              <h3>2024 - NOW</h3>
            </div>
            <p>
              Building a B2B wholesale commerce SaaS platform that digitalizes ordering and workflows for retailers and wholesalers. Handling frontend and backend development (React, Node.js), API design, authentication, and deployment on cloud infrastructure, while managing product decisions and business operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Low-Code Workflow Automation Intern</h4>
                <h5>Pegasystems / SmartBridge</h5>
              </div>
              <h3>Sep 2026</h3>
            </div>
            <p>
              Completed 60 hours of industry-integrated learning with hands-on exposure to workflow automation, low-code technologies, and real-world project implementation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Scholar</h4>
                <h5>Bennett University</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              B.Tech in Computer Science and Engineering. Strong foundation in Data Structures, Object-Oriented Programming, and algorithm optimization. Secured Rank 24 among Top 100 Teams at Smart India Internal Hackathon (SIH-26).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
