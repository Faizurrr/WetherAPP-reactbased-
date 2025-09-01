import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h1 className="card-title text-center mb-4 text-primary fw-bold">
            🌦️ Weather App
          </h1>
          <p className="card-text fs-5 text-secondary">
            Our <span className="fw-bold text-dark">Weather App</span> helps you
            stay updated with <strong>real-time weather forecasts</strong> for
            any city around the world 🌍. Just type the city name and instantly
            see details like <strong>temperature</strong>,{" "}
            <strong>humidity</strong>, <strong>wind speed</strong>, and{" "}
            <strong>conditions</strong> ⚡.
          </p>

          <p className="card-text fs-5 text-secondary">
            Whether you’re planning a trip, preparing for rain, or simply
            curious – this app gives you{" "}
            <span className="fw-bold text-dark">accurate data</span> with a
            clean and simple UI 🌈.
          </p>

          <div className="mt-4">
            <h3 className="text-primary fw-semibold mb-3">✨ Key Features:</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🌡️ Real-time Temperature</li>
              <li className="list-group-item">💧 Humidity & Wind Speed</li>
              <li className="list-group-item">☁️ Dynamic Weather Icons</li>
              <li className="list-group-item">📍 Search Any City Worldwide</li>
              <li className="list-group-item">🎨 Simple & Modern UI</li>
            </ul>
          </div>

          <p className="text-center mt-4 text-muted fst-italic">
            Made with ❤️ using React & Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
