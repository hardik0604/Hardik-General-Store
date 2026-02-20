import React from 'react';
import Logo from './Logo';

const Footer = ({ onCategoryClick }) => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Serving the Hapur community with quality products and fair prices since day one.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>Shop</h5>
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
            <h5>Visit</h5>
            <ul>
              <li><a href="tel:09837509304">Call Us</a></li>
              <li><a href="https://maps.app.goo.gl/tE9zCZgo7am5Jm1p9" target="_blank" rel="noopener noreferrer">Directions</a></li>
              <li><a href="mailto:tyagiaadesh298@gmail.com?subject=Feedback">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Hardik General Store, Hapur</span>
        <span>Taga Sarai, Hapur, Uttar Pradesh</span>
      </div>
    </footer>
  );
};

export default Footer;
