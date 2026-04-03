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
                <h4>Data Analytics Simulation</h4>
                <h5>Deloitte Australia</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed an intensive Data Analytics job simulation focusing on
              data insights, visualization, and strategic decision-making for business growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Management Simulation</h4>
                <h5>Siemens Mobility</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Honed skills in project planning, leadership, and operational management through
              comprehensive simulations of industrial project management workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Solutions Architecture Simulation</h4>
                <h5>AWS / Amazon</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed cloud-native architectures and infrastructure solutions for scalable applications,
              demonstrating technical proficiency in modern systems design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Engineering & CS/IT</h4>
                <h5>Bachelor's Degree</h5>
              </div>
              <h3>EDUCATION</h3>
            </div>
            <p>
              Strong academic foundation in software principles, data structures, and Computer Engineering,
              driving a continuous passion for learning and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
