import React, { useRef } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import CategoryTabs from './CategoryTabs';
import ProductGrid from './ProductGrid';
const Catalog = React.forwardRef(({ categories, activeCategory, onCategoryChange, filteredProducts }, ref) => {
  const localRef = useRef(null);
  const resolvedRef = ref || localRef;

  const handleCategoryChoice = (cat) => {
    onCategoryChange(cat);
    // Smooth scroll handled by App or here? If here, we need access to scrollTo.
    // Let's keep the scroll logic here but simpler:
    setTimeout(() => {
        const yOffset = -80;
        const element = resolvedRef.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }, 60);
  };

  return (
    <section id="catalog" ref={resolvedRef}>
      <div className="catalog-sticky-bar">
        <div className="cat-header-row">
          <h2 className="cat-title">{activeCategory === 'All' ? 'Handpicked for You' : activeCategory}</h2>
          <span className="cat-count">
            {activeCategory === 'All' ? 'Our favorite staples and daily essentials' : `${filteredProducts.length} items`}
          </span>
        </div>

        <CategoryTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChoice} 
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="grid-wrap"
        >
          <ProductGrid products={filteredProducts} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
});

Catalog.displayName = 'Catalog';

export default Catalog;
