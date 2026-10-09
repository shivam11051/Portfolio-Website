import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHIVAM
              <br />
              <span>MISHRA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Founder. Engineer. Builder.</h3>
            <h2 className="landing-info-h2" style={{ fontSize: '20px', lineHeight: '1.4', fontWeight: '400', maxWidth: '600px' }}>
              I build software products that solve real-world problems — from full-stack applications and SaaS platforms to AI-powered systems.
            </h2>
            <div style={{ marginTop: '20px', fontSize: '16px', color: 'var(--accentColor)', fontWeight: '500' }}>
              Open to select engineering and AI opportunities.
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
