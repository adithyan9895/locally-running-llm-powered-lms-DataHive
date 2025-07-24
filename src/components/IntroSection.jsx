import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroSection.css'; // Import IntroSection-specific styles

function IntroSection() {
  const navigate = useNavigate();

  const handleTryButtonClick = () => {
    navigate('/selection');
  };

  return (
    <div className="intro-section">
      <h1 className="animated-title">Welcome to DataHive</h1>
      <p className="animated-description">
        This is a private GPT officially for SJCET Palai. DataHive is designed to provide authorized users with access to relevant information, including student data, academic activities, and other essential resources related to the college. Please use this tool responsibly and in accordance with college guidelines.
      </p>
      <button 
        className="try-button animated-button"
        onClick={handleTryButtonClick}
      >
        Try DataHive
      </button>
    </div>
  );
}

export default IntroSection;