import React, { useState } from 'react';
import './top.css';

function Top() {  // Capitalized component name
  const [showEmail, setShowEmail] = useState(false);

  const handleHelpClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <header className="header">
      <div className="logo">DataHive</div>
      <nav>
        <ul>
          <li className="help-item">
            <button className="help-button" onClick={handleHelpClick}>
              Help
              {showEmail && (
                <div className="email-popup animated-email">
                  <p>Contact:</p>
                  <p>addithyanb@gmail.com</p>
                  <p>aayushg@gmail.com</p>
                  <p>dona@gmail.com</p>
                  <p>devamanas@gmail.com</p>
                </div>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Top;