
import React from 'react';
import { motion } from 'framer-motion';
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
      whileHover={{ y: -4, boxShadow: "0 12px 32px -8px rgba(0, 0, 0, 0.08)" }}
    >
    <div className="card-top">
      <span className="card-cat">{product.category}</span>
      <div className="card-rating">
        <Star size={10} fill="currentColor" strokeWidth={0} />
        <span>{product.rating}</span>
      </div>
    </div>

    {/* Responsive Product Image */}
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 120 }}>
      <picture>
        {/* Example: If you add AVIF/WebP versions, update these fields in your product data */}
        {/* {product.imageAvif && <source srcSet={product.imageAvif} type="image/avif" />} */}
        {/* {product.imageWebp && <source srcSet={product.imageWebp} type="image/webp" />} */}
        <img
          src={product.image || '/vite.svg'}
          srcSet={product.imageSmall ? `${product.imageSmall} 320w, ${product.image} 640w` : undefined}
          sizes="(max-width: 640px) 100vw, 320px"
          alt={product.name}
          loading="lazy"
          width={160}
          height={160}
          style={{ objectFit: 'cover', width: 120, height: 120, borderRadius: 12, background: '#f5f5f7' }}
        />
      </picture>
    </div>

    <div className="card-content">
      <h3 className="card-name">{product.name}</h3>
      <p className="card-desc">{product.desc}</p>
    </div>

    <div className="card-actions">
      <span className="card-price" style={{ fontSize: '15px' }}>Best Market Price</span>
    </div>
  </motion.div>
  );
};

export default ProductCard;
