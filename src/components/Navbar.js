import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title = 'Set title here', about = 'Enter about here', darkMode, toggleDarkMode, logo}) {
 return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top`} style={{
    borderBottom: `1px solid black`
  }}>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */} 
      <div className="container-fluid">
        <img src={logo} alt="" />
        <span className="navbar-brand mx-2" style={{ marginTop: '-4px', fontSize: '19px' }}>
          {title}
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{about}</Link>
            </li>
          </ul>
          {/* <button
            className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'} `}
            onClick={toggleDarkMode}
            title="Toggle dark mode"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button> */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={toggleDarkMode}/>
              <label className="form-check-label" for="switchCheckDefault">{darkMode ? '☀️' : '🌙'}</label>
          </div>
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
