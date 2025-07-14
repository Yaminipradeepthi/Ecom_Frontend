import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const OrderConfirmation = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Order Confirmation</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default OrderConfirmation;
