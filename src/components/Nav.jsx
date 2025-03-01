import React from 'react';

function Nav() {
  const navItems = [
    "Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"
  ];

  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul style={{ 
        padding: 0, 
        listStyleType: 'none', 
        display: 'flex', 
        justifyContent: 'space-between' 
      }}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#" style={{ color: 'lightgray', textDecoration: 'none' }}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;