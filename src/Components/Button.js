import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ type, title, icon, href }) => {
  return (
    <a href={href}>
      <button
        className="button" // Apply the button class
        type={type}
      >
        {icon && <img src={icon} alt={title} className="icon" />} {/* Use class for icon */}
        <h1 className="title">{title}</h1> {/* Use class for title */}
      </button>
    </a>
  );
};

export default Button;
