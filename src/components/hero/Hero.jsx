import React, { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const easeExpo = [0.16, 1, 0.3, 1];

import img1m from '../../assets/hero/1-m.webp';
import img1d from '../../assets/hero/1-d.webp';
import img2m from '../../assets/hero/2-m.webp';
import img2d from '../../assets/hero/2-d.webp';
import img3m from '../../assets/hero/3-m.webp';
import img3d from '../../assets/hero/3-d.webp';
import img4m from '../../assets/hero/4-m.webp';
import img4d from '../../assets/hero/4-d.webp';

const IMAGES = [
  { srcDesktop: img1d, srcMobile: img1m },
  { srcDesktop: img2d, srcMobile: img2m },
  { srcDesktop: img3d, srcMobile: img3m },
  { srcDesktop: img4d, srcMobile: img4m }
];

const Hero = ({ scrollToCatalog }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Preload images to avoid lag spikes during rotation
    IMAGES.forEach((imgObj) => {
      const imgD = new Image();
      imgD.src = imgObj.srcDesktop;
      const imgM = new Image();
      imgM.src = imgObj.srcMobile;
    });

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-band" style={{ position: 'relative', overflow: 'hidden', minHeight: '440px' }}>
      <AnimatePresence mode="sync">
        <motion.picture
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <source media="(max-width: 640px)" srcSet={IMAGES[index].srcMobile} />
          <source media="(min-width: 641px)" srcSet={IMAGES[index].srcDesktop} />
          <img
            src={IMAGES[index].srcDesktop}
            crossOrigin="anonymous"
            alt="Product Showcase"
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </motion.picture>
      </AnimatePresence>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="hero-overlay" />
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeExpo }}
        >
          <div className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            Open Now · 6 AM – 9 PM Daily
          </div>

          <h1 className="hero-h1">
            Hapur's trusted store<br />for <em>everything you need.</em>
          </h1>

          <p className="hero-sub">
            Fresh groceries, snacks, dairy, spices, cooking essentials and stationery
            — all under one roof at Circular Road, Taga Sarai.
          </p>

          <div className="hero-ctas">
            <a href="https://maps.app.goo.gl/tE9zCZgo7am5Jm1p9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get Directions <ArrowUpRight size={15} />
            </a>
            <a href="tel:09837509304" className="btn btn-secondary">
              <Phone size={14} strokeWidth={2} /> 098375 09304
            </a>
            <button
              className="btn btn-secondary"
              onClick={scrollToCatalog}
            >
              View Catalog
            </button>
          </div>

          <div className="meta-strip">
            {[
              { icon: <Clock size={17} strokeWidth={2} />,  label: 'Hours',   value: '6:00 AM – 9:00 PM' },
              { icon: <MapPin size={17} strokeWidth={2} />, label: 'Address', value: 'Circular Rd, Taga Sarai, Hapur' },
              { icon: <Phone size={17} strokeWidth={2} />,  label: 'Phone',   value: '098375 09304' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="meta-item">
                <span className="meta-ico">{icon}</span>
                <div>
                  <div className="meta-lbl">{label}</div>
                  <div className="meta-val">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
