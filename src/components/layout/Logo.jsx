import React from 'react';
import logoUrl from '../../assets/logo.png';

const Logo = () => (
  <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
    <img src={logoUrl} alt="Hardik General Store Logo" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover', background: '#fff', border: '1px solid #e8e0d4' }} />
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily:'var(--serif)', fontWeight:600, fontSize:'17px', letterSpacing:'-0.2px', color:'var(--ink)' }}>
        Hardik
      </div>
      <div style={{ fontFamily:'var(--sans)', fontSize:'10px', color:'var(--ink-3)', letterSpacing:'1.5px', textTransform:'uppercase', marginTop:'2px' }}>
        General Store
      </div>
    </div>
  </div>
);

export default Logo;
