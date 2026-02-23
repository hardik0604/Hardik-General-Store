import React from 'react';
import Logo from './Logo';

const Footer = ({ onCategoryClick }) => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>More than just a store — we're part of the neighborhood. Proudly family-owned and serving the Hapur community with a smile.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              {['All', 'Dairy', 'Snacks', 'Spices', 'Stationery'].map(c => (
                <li key={c}>
                  <a href="#" onClick={e => { e.preventDefault(); if(onCategoryClick) onCategoryClick(c); }}>
                    {c === 'All' ? 'All Products' : c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li><a href="tel:09837509304">Call Us</a></li>
              <li><a href="https://maps.app.goo.gl/tE9zCZgo7am5Jm1p9" target="_blank" rel="noopener noreferrer">Directions</a></li>
              <li><a href="mailto:tyagiaadesh298@gmail.com?subject=Feedback">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Made with ♥ for Hapur. © {new Date().getFullYear()} Hardik General Store.</span>
        <span>Circular Road, Taga Sarai, Hapur, Uttar Pradesh</span>
      </div>
    </footer>
  );
};

export default Footer;
