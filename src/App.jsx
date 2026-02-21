import React, { useRef, Suspense } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/layout/Footer';

const Catalog = React.lazy(() => import('./components/catalog/Catalog'));
import { useProducts } from './hooks/useProducts';

// Import Styles
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';

export default function App() {
  const { categories, filteredProducts, activeCategory, setActiveCategory } = useProducts();
  const catalogRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
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

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    // Smooth scroll logic is inside Catalog for internal changes, but we might want it here?
    // Handled in Catalog.jsx via prop if triggered from there (tabs).
    // If triggered from Footer, we need to scroll.
    
    // Actually, since state is lifted, we can do scrolling here if we want consistent behavior.
    // Catalog.jsx smooth scroll logic was:
    setTimeout(() => {
        const yOffset = -80;
        const element = catalogRef.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }, 60);
  };

  const scrollToCatalog = () => {
    // Just scroll, don't change category unless needed?
    // Logic just scrolls to catalog ref
    const yOffset = -80;
    const element = catalogRef.current;
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <>
      <Navbar />
      <Hero scrollToCatalog={scrollToCatalog} />
      <main>
        <Suspense fallback={<div style={{ minHeight: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Catalog...</div>}>
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
          onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
          style={{
            position: 'fixed',
            right: 24,
            bottom: 32,
            zIndex: 200,
            background: 'rgba(255, 255, 255, 0.65)',
            color: 'var(--ink)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
            transform: 'scale(1)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
            e.currentTarget.style.transform = 'scale(1.06)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.65)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}