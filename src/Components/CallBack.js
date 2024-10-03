"use client"
import React, { useState } from 'react';
import PopupForm from './PopupForm';

const CallBack = ({ title, text, buttonText, buttonLink }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div id="CallBack" className="poppins-semibold CallBack">
      <div className="CallBack-content">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className='btn_blue' type="button" onClick={togglePopup}>{buttonText}</button>
        {showPopup && <PopupForm />}
      </div>
    </div>
  );
};

export default CallBack;

