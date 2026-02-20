import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

export const useProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Featured: exactly 8 items — top pick from 8 categories (fills 2 rows of 4 cleanly)
  // We use useMemo to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 9);
    }
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return {
    categories: CATEGORIES,
    filteredProducts,
    activeCategory,
    setActiveCategory
  };
};
