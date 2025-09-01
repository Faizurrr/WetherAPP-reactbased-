import React from "react";
import profilepic from '../assets/profilepic.jpg'
const AboutDeveloper = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light py-5 px-3">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: "1000px", background: "linear-gradient(135deg, #2b1055, #7597de)" }}>
        <div className="row g-0">
          
          {/* Left Side - Profile */}
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center p-4 bg-dark bg-opacity-75">
            <img
              src={profilepic} // Replace with your image
              alt="Developer img"
              className="rounded-circle border border-3 border-info shadow-lg mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h2 className="h4 fw-bold text-white">Faizur Rahman Khan</h2>
            <p className="text-info mb-3">Frontend Developer | React Enthusiast</p>

            {/* Social Links */}
            <div className="d-flex gap-4 fs-3">
              <a href="https://github.com/Faizurrr" target="_blank" rel="noreferrer" className="text-light link-hover">
                🐙
              </a>
              <a href="https://www.linkedin.com/in/faizurrahman-868700326/" target="_blank" rel="noreferrer" className="text-light link-hover ">
                🔗
             
              </a>
            </div>
          </div>

          {/* Right Side - About Text */}
          <div className="col-md-8 p-5 text-light">
            <h3 className="fw-bold mb-3 text-gradient">About Me</h3>
            <p>
              Hi 👋, I’m <span className="fw-semibold text-info">Faizur</span>, a passionate developer who loves building modern web applications.  
              I specialize in <span className="fw-semibold text-warning">React</span>, <span className="fw-semibold text-success">Bootstrap</span>, and writing clean, efficient code.
            </p>
            <p>
              This <span className="fw-semibold text-danger">Weather App</span> is a practice project where I combined functionality with design to deliver a smooth user experience 🚀.
            </p>

            {/* Fancy Quote */}
            <blockquote className="blockquote bg-dark bg-opacity-50 p-4 rounded-3 mt-4 border-start border-4 border-info">
              <p className="mb-0 fst-italic text-light">
                “First, solve the problem. Then, write the code.”
              </p>
            </blockquote>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer text-center bg-dark bg-opacity-75 border-0 py-3">
          <small className="text-muted">
            © {new Date().getFullYear()} Weather App | Designed & Built with ❤️ by Faizur
          </small>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
