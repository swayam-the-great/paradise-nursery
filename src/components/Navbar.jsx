import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Navbar Component
 * Displays navigation menu with Home, Plants, Cart links
 * Shows cart item count dynamically
 */
function Navbar() {
  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/products')}>
        🌿 Paradise Nursery
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/products">🏠 Home</Link>
        </li>
        <li>
          <Link to="/products">🌱 Plants</Link>
        </li>
        <li>
          <Link to="/about">ℹ️ About Us</Link>
        </li>
        <li className="cart-icon">
          <Link to="/cart">🛒 Cart</Link>
          {totalQuantity > 0 && (
            <span className="cart-badge">{totalQuantity}</span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
