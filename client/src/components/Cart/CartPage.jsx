import React from 'react';
import CategorySection from './CategorySection';
import { useNavigate } from 'react-router-dom';

const mens = [
  { id: 1, name: 'Men Shirt', price: 799 },
  { id: 2, name: 'Men Trousers', price: 999 },
];

const womens = [
  { id: 3, name: 'Women Kurti', price: 699 },
  { id: 4, name: 'Women Jeans', price: 899 },
];

const kids = [
  { id: 5, name: 'Kids Shirt', price: 499 },
  { id: 6, name: 'Kids Shorts', price: 399 },
];

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <CategorySection title="Men's Wear" items={mens} />
      <CategorySection title="Women's Wear" items={womens} />
      <CategorySection title="Kids' Wear" items={kids} />
      <br />
      <button onClick={() => navigate('/order')}>Place Order</button>
    </div>
  );
};

export default CartPage;
