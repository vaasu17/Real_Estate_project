"use client";
import { useState, useEffect } from 'react';


const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Number: ''
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  return (
    <>
      {isOpen && (
        <div className="popup open poppins-semibold">
          <div className="popupcard">
            <img src='/favicon.png' alt="Form" className="left-image" /> 
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <p style={{ fontSize: '30px' }}>Request a Call Back!</p>
            <form >
              <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Enter your name"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="Enter your email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Number">Number:</label>
                <input
                  type="text" // Use type "number" for numeric input
                  id="Number"
                  name="Number"
                  placeholder="Enter your phone number"
                  value={formData.Number.toString()}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
