import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import About from './components/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    showAlert(newMode ? 'Dark mode enabled' : 'Light mode enabled', 'success');
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Router>
      <Navbar title="TextPlay" about="About" darkMode={darkMode} toggleDarkMode={toggleDarkMode} logo={logo} />
      <Alert alert={alert} />
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text to analyze here" textplaceholder="Type your text..." darkMode={darkMode} alert={showAlert} />} />
            <Route path="/about" element={<About darkMode={darkMode}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
