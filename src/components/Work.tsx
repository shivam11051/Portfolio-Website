import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "../gsap-shims/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "UrbaMart (formerly Jagdamba Enterprises)",
              category: "B2B E-Commerce Wholesale SaaS",
              tools: "React 19, Firebase, Recharts, Node.js, PWA",
              description: "A comprehensive B2B wholesale commerce SaaS platform. Digitalizes retailer and wholesaler workflows including order management, invoicing, and real-time inventory tracking. Architected for multi-tenancy and secure role-based access.",
              link: "https://github.com/shivam11051",
              image: "/images/jagdamba-new.png"
            },
            {
              name: "UdyamAI",
              category: "AI-Powered Business Advisory Platform",
              tools: "React 18, Node.js, Express.js, Solidity (Ethereum Sepolia), Gemini AI, Leaflet",
              description: "A conversational AI assistant and local market intelligence platform for rural micro-entrepreneurs. Integrates satellite maps and blockchain for low-friction government loan referrals.",
              link: "https://github.com/shivam11051", 
              image: "/images/placeholder.webp"
            },
            {
              name: "BlockChit",
              category: "Web3 DApp / Community Lending",
              tools: "Solidity, Hardhat, Ethereum, React, Node.js",
              description: "Decentralized peer-to-peer micro-lending smart contracts on the Sepolia testnet. Achieved a 20% gas optimization through rigorous Solidity refactoring and automated Hardhat testing.",
              link: "https://shivam11051.github.io/community-dapp",
              image: "/images/blockchit-new.png"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.description && (
                  <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.4', color: '#ccc' }}>
                    {project.description}
                  </p>
                )}
                {project.link && (
                  <div style={{ marginTop: '1rem' }}>
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
                      View Project ↗
                    </a>
                  </div>
                )}
              </div>
              <WorkImage image={project.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
