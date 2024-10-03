import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Button from "./Button";
import '../App.css'; // Assuming this is your main CSS file
import './Navbar.css'; // Import the Navbar CSS file

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      {/* Link to home route */}
      <a href="#home">
        <img src="/logo.png" alt="logo" /> {/* Logo */}
      </a>
      
      {/* Main navigation links */}
      <ul className={`h-full gap-12 lg-flex ${isDropdownOpen ? 'flex' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <a href={link.href}> {/* Replaced Link with anchor tag */}
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact button */}
      <div className={`contact-button lg-flex ${isDropdownOpen ? 'flex' : 'hidden'}`}>
        <Button
          type="button"
          title="Contact Us"
          icon="/whatsapp.png"
          href="https://wa.me/6283205418" // External link
        />
      </div>

    </nav>
  );
}

export default Navbar;
