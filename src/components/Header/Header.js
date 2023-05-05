import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./logo_c.png" alt="SOFTGRAY" />
      </div>
      <div className="nav">
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div className="contact">
        <p>+81-123-456-7890</p>
      </div>
    </div>
  );
}

export default Header;
