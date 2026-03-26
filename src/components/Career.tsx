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
                <h4>Founder & Manager</h4>
                <h5>Car Rental Business</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing operations, customer relations, and day-to-day logistics to run a successful car rental business. Combining real-world business experience with technology-driven growth strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Scholar</h4>
                <h5>Bennett University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              CSE student with a strong foundation in Data Structures, full-stack development, and blockchain. Passionate about building scalable and innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
