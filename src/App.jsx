
import React, { useRef, Suspense, useCallback, useEffect, useState, lazy } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/layout/Footer';
import { useProducts } from './hooks/useProducts';
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';

const Catalog = lazy(() => import('./components/catalog/Catalog'));


export default function App() {
  const { categories, filteredProducts, activeCategory, setActiveCategory } = useProducts();
  const catalogRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back-to-top button on scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to catalog section (used by Hero and category change)
  const scrollToCatalog = useCallback(() => {
    const yOffset = -80;
    const element = catalogRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  // Handle category change and scroll to catalog
  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
    setTimeout(scrollToCatalog, 60);
  }, [setActiveCategory, scrollToCatalog]);

  return (
    <>
      <Navbar />
      <Hero scrollToCatalog={scrollToCatalog} />
      <main>
        <Suspense fallback={<div aria-live="polite" style={{ minHeight: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Catalog...</div>}>
          <Catalog
            ref={catalogRef}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            filteredProducts={filteredProducts}
          />
        </Suspense>
      </main>
      <Footer onCategoryClick={handleCategoryChange} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}
      {/* Add .back-to-top styles to your CSS for maintainability */}
    </>
  );
}