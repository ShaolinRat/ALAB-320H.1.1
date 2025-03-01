import React from 'react';

function Footer() {
  const footerNavItems = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];

  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul style={{ 
          padding: 0, 
          listStyleType: 'none', 
          display: 'flex', 
          justifyContent: 'space-between' 
        }}>
          {footerNavItems.map((item, index) => (
            <li key={index}>
              <a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p style={{ color: 'lightgray' }}>© 2025 Sartre's List</p>
    </footer>
  );
}

export default Footer;