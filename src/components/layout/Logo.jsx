import React from 'react';
import logoUrl from '../../assets/logo.webp';

const Logo = () => (
  <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
    <img src={logoUrl} alt="Hardik General Store Logo" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'contain', background: 'transparent' }} />
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily:'var(--serif)', fontWeight: 700, fontSize:'20px', letterSpacing:'-0.3px', color:'var(--ink)' }}>
        Hardik
      </div>
      <div style={{ fontFamily:'var(--sans)', fontSize:'11px', fontWeight: 600, color:'var(--ink-2)', letterSpacing:'1.8px', textTransform:'uppercase', marginTop:'3px' }}>
        General Store
      </div>
    </div>
  </div>
);

export default Logo;
