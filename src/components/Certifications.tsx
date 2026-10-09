import "./styles/Career.css";

const Certifications = () => {
  return (
    <div className="career-section section-container" style={{ padding: "0 0 120px 0" }}>
      <div className="career-container">
        <h2 style={{ marginBottom: "60px" }}>
          Certifications <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation</h4>
                <h5>BE10x</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              AI integration for workflow optimization and task automation in modern development environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database Management</h4>
                <h5>Saylor University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Relational database design, SQL queries, and normalization techniques for data integrity.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Structures and Algorithms</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Core data structures and algorithm optimization for complex software problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering</h4>
                <h5>NPTEL</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              SDLC methodologies, Agile practices, and software requirements engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
