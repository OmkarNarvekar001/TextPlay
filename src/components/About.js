import React from 'react';

export default function About({ darkMode }) {
  const getAccordionStyle = () => ({
    backgroundColor: darkMode ? '#1c1c1c' : '#fff',
    color: darkMode ? '#f8f9fa' : '#212529',
    border: `1px solid ${darkMode ? '#444' : '#dee2e6'}`
  });

  const getButtonClass = () =>
    `accordion-button ${darkMode ? 'bg-dark text-light' : 'bg-light'}`;

  return (
    <div className="my-3">
      <h2 className="mb-4">About TextPlay</h2>
      <div className="accordion" id="aboutAccordion">

        {/* Accordion Items */}
        {[
          {
            id: 'Intro',
            title: '📘 Summary',
            body: (
              <p>
                <strong>TextPlay</strong> is a simple and powerful text utility tool designed to help you quickly manipulate and analyze text in your browser.
              </p>
            )
          },
          {
            id: 'Features',
            title: '✨ Features',
            body: (
              <ul>
                <li>Convert text to <strong>UPPERCASE</strong> or <strong>lowercase</strong></li>
                <li><strong>Trim</strong> whitespace from your text</li>
                <li><strong>Reverse</strong> text content</li>
                <li>Copy transformed text with a single click</li>
                <li>Word and character count preview</li>
                <li>Supports <strong>Dark Mode</strong> toggle</li>
                <li>Responsive UI – works well on mobile too</li>
              </ul>
            )
          },
          {
            id: 'Tech',
            title: '🛠️ Tech Stack',
            body: (
              <ul>
                <li>Built with <strong>React</strong> and <strong>React Router</strong></li>
                <li>Styled using <strong>Bootstrap 5</strong></li>
                <li>Hosted with <strong>GitHub Pages</strong></li>
              </ul>
            )
          },
          {
            id: 'Purpose',
            title: '📌 Purpose',
            body: (
              <p>
                This project was built as a learning tool to sharpen my React skills and demonstrate how frontend interactivity can be implemented using modern frameworks.
              </p>
            )
          },
          {
            id: 'Roadmap',
            title: '🧭 Roadmap',
            body: (
              <ul>
                <li>Setup project with <strong>Create React App</strong></li>
                <li>Built Navbar and layout</li>
                <li>Implemented core text tools</li>
                <li>Added copy-to-clipboard and alert system</li>
                <li>Added Dark Mode support</li>
                <li>Used Bootstrap + React Router</li>
                <li>Deployed to GitHub Pages</li>
              </ul>
            )
          }
        ].map(({ id, title, body }, index) => (
          <div key={id} className="accordion-item" style={getAccordionStyle()}>
            <h2 className="accordion-header" id={`heading${id}`}>
              <button
                className={`${getButtonClass()}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-controls={`collapse${id}`}
              >
                {title}
              </button>
            </h2>
            <div
              id={`collapse${id}`}
              className={`accordion-collapse collapse`}
              aria-labelledby={`heading${id}`}
            >
              <div className="accordion-body" style={getAccordionStyle()}>
                {body}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-right" style={{ color: darkMode ? '#f8f9fa' : '#212529' }}>
        Designed by <strong>Omkar Narvekar</strong>
      </p>
    </div>
  );
}
