import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductItem = ({ product }) => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const quantity = cart.find((i) => i.id === product.id)?.quantity || 0;

  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => removeItem(product.id)} disabled={quantity === 0}>-</button>
      <span style={{ margin: '0 10px' }}>{quantity}</span>
      <button onClick={() => addItem(product)}>+</button>
    </div>
  );
};

export default ProductItem;
