import React from 'react';

const AboutUs = ({ imageSrc, content }) => {
  return (
    <div className="bg about-us-section">
      <img src={imageSrc} alt="About Us" className="about-us-image" />
      <div className="about-us-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutUs;
