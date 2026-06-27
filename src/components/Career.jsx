import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Engineering</h4>
                <h5>University of Mumbai</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology (BTech) and Bachelor of Engineering (BE) 
              at Watumall Institute. Focusing on software development, data structures, 
              and systems engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School Diploma</h4>
                <h5>KM Agrawal</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Specialized in CS & IT during higher secondary education. Developed core 
              understanding of information technology and computer science fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
