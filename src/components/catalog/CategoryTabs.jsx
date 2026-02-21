import React from 'react';


const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  // Keyboard navigation for tabs
  const tabRefs = React.useRef([]);
  const handleKeyDown = (e, idx) => {
    if (e.key === 'ArrowRight') {
      const next = (idx + 1) % categories.length;
      tabRefs.current[next].focus();
    } else if (e.key === 'ArrowLeft') {
      const prev = (idx - 1 + categories.length) % categories.length;
      tabRefs.current[prev].focus();
    } else if (e.key === 'Home') {
      tabRefs.current[0].focus();
    } else if (e.key === 'End') {
      tabRefs.current[categories.length - 1].focus();
    }
  };
  return (
    <div className="pill-row" role="tablist">
      {categories.map((c, idx) => (
        <button
          key={c}
          id={`tab-${c}`}
          ref={el => tabRefs.current[idx] = el}
          role="tab"
          aria-selected={activeCategory === c}
          aria-controls={`tabpanel-${c}`}
          tabIndex={activeCategory === c ? 0 : -1}
          className={`pill ${activeCategory === c ? 'pill-on' : 'pill-off'}`}
          onClick={() => onCategoryChange(c)}
          onKeyDown={e => handleKeyDown(e, idx)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
