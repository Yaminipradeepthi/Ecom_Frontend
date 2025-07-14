import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CartPage from './components/Cart/CartPage';
import OrderConfirmation from './components/Order/OrderConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
