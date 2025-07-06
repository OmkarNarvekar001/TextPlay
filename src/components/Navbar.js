import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title = 'Set title here', about = 'Enter about here', darkMode, toggleDarkMode,logo}) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        }`}
    >
      <div className="container-fluid">
        <img src={logo} alt="" />
        <a className="navbar-brand mx-2" style={{ marginTop: '-5px',fontSize:'20px' }} href="/">{title}</a>
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
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active"aria-current="page" href="/">{about}</a>
            </li>
          </ul>

          {/* 🌙 Dark Mode Toggle Button */}
          <button
            className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
            onClick={toggleDarkMode}
            title="Toggle dark mode"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
