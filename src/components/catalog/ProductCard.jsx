
import React from 'react';
import { m as motion } from 'framer-motion';
import { Star, Phone, Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      layout
      variants={item}
      className="card"
      whileHover={{ y: -6, boxShadow: "0 20px 40px -8px rgba(0, 0, 0, 0.12)" }}
    >
    <div className="card-top">
      {/* Intentionally removed category/rating for absolute minimalism */}
    </div>


    <div className="card-content">
      <h3 className="card-name">{product.name}</h3>
      <p className="card-desc">{product.desc}</p>
    </div>

    <div className="card-actions">
      <span className="card-price" style={{ fontSize: '14px', color: 'var(--ink-2)', fontWeight: 400 }}>{product.price || 'Everyday Fair Price'}</span>
      <div style={{color: '#0066cc', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px'}}>
        Buy <Plus size={14} />
      </div>
    </div>
  </motion.div>
  );
};

export default ProductCard;
