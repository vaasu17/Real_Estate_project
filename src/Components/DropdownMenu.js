import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DropdownMenu = ({ navLinks }) => {
  return (
    <div className="poppins-semibold dropdown-menu-container">
      <div className="dropdown-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link to={link.href}> {/* Changed href to to */}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
