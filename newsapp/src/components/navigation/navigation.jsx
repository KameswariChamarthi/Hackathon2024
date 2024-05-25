import React from 'react';
import './navigation.css'; // Import your CSS file

const Navigation = () => {
  const navLinks = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="topnav">
      {navLinks.map((link) => (
        <a key={link.text} href={link.link} className="nav-link">
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
