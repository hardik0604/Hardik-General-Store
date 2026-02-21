import React from 'react';
import { m as motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.div 
      className="grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </motion.div>
  );
};

export default ProductGrid;
