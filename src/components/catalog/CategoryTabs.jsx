import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="pill-row" role="tablist">
      {categories.map(c => (
        <button
          key={c}
          role="tab"
          aria-selected={activeCategory === c}
          className={`pill ${activeCategory === c ? 'pill-on' : 'pill-off'}`}
          onClick={() => onCategoryChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
