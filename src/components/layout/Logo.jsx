import React from 'react';
import logoUrl from '../../assets/logo.webp';

const Logo = ({ inverse = false }) => (
  <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
    <img src={logoUrl} alt="Hardik General Store Logo" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'contain', background: 'transparent' }} />
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily:'var(--serif)', fontWeight: 700, fontSize:'20px', letterSpacing:'-0.3px', color: inverse ? '#fff' : 'var(--ink)', lineHeight: '0.9' }}>
        Hardik
      </div>
      <div style={{ fontFamily:'var(--sans)', fontSize:'11px', fontWeight: 600, color: inverse ? 'rgba(255,255,255,0.85)' : 'var(--ink-2)', letterSpacing:'1.8px', textTransform:'uppercase', marginTop:'4px' }}>
        General Store
      </div>
      <div style={{ fontFamily:'var(--serif)', fontSize:'9px', fontWeight: 500, fontStyle:'italic', color: inverse ? 'rgba(255,255,255,0.65)' : 'var(--ink-3)', marginTop:'2px' }}>
        Family-run & Local
      </div>
    </div>
  </div>
);

export default Logo;
