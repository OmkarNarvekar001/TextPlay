import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <>
      <Navbar
        title="TextPlay"
        about="About TextPlay"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        logo={logo}
      />
      <Alert alert={alert} />
      <div className={darkMode ? 'app dark-mode' : 'app'} >
        <div className="container">
          <TextForm
            heading="Enter your text to analyze here"
            textplaceholder="Type your text..."
            darkMode={darkMode}
            alert={showAlert}
          />
        </div>
      </div>
    </>
  );
}

export default App;
