"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Number: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const isSubmitDisabled = !(formData.Email || formData.Number);

  return (
    <div id="form" className="poppins-semibold bg1">
      <h2 style={{ fontSize: '60px', textAlign: 'center' }} className='poppins-semibold'>GET DETAILS</h2>
      <form className="contactForm_form" >
        <div className="contactForm_group">
          <label className="contactForm_label" htmlFor="name">Name:</label>
          <input
            className="contactForm_input"
            type="text"
            id="name"
            name="Name"
            placeholder="Enter your name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contactForm_group">
          <label className="contactForm_label" htmlFor="email">Email:</label>
          <input
            className="contactForm_input"
            type="text"
            id="email"
            name="Email"
            placeholder="Enter your email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contactForm_group">
          <label className="contactForm_label" htmlFor="number">Number:</label>
          <input
            className="contactForm_input"
            type="text"
            id="number"
            name="Number"
            placeholder="Enter your phone number"
            value={formData.Number}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
