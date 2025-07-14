import React from 'react';
import ProductItem from './ProductItem';

const CategorySection = ({ title, items }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
