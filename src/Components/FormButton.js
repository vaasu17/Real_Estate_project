import React from 'react';

const FormButton = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="blue-button" // Add your blue button class here
      onClick={handleClick}
    >
      connect with us
    </button>
  );
};

export default FormButton;
