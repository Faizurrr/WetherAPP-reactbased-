import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mode, setMode] = useState("light"); // ✅ state yahan banayenge

  const modeButton = () => {
    if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";          
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";           
  }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Weather_App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* ✅ Toggle Switch */}
          <div className="form-check form-switch text-nowrap">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckChecked"
              onChange={modeButton}
              checked={mode === "dark"}
            />
            <label className="form-check-label" htmlFor="switchCheckChecked">
              {mode === "dark" ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
