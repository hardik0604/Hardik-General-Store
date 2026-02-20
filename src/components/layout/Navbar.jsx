import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo />
        <div className="nav-right">
          <a className="nav-phone" href="tel:09837509304">
            <Phone size={14} strokeWidth={2} />
            <span>098375 09304</span>
          </a>
          <a className="nav-map" href="https://maps.app.goo.gl/tE9zCZgo7am5Jm1p9" target="_blank" rel="noopener noreferrer">
            <Navigation size={14} strokeWidth={2} />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
