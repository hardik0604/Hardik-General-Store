import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo lightText={true} />
        <div className="nav-right">
          <a className="nav-phone" href="tel:09837509304" aria-label="Call Store">
            <Phone size={14} strokeWidth={2} aria-hidden="true" />
            <span>098375 09304</span>
          </a>
          <a className="nav-map" href="https://maps.app.goo.gl/tE9zCZgo7am5Jm1p9" target="_blank" rel="noopener noreferrer" aria-label="Get Directions">
            <Navigation size={14} strokeWidth={2} aria-hidden="true" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
