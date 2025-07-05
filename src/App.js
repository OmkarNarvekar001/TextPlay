import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 🔄 Update <body> class when darkMode changes
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <>
      <Navbar
        title="TextPlay"
        about="About textPlay"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <div className="container">
          <TextForm
            heading="Enter your text to analyze below"
            textplaceholder="Type your text..."
            darkMode={darkMode}
          />
        </div>
      </div>
    </>
  );
}

export default App;
