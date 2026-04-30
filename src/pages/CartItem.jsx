import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';
import '../styles/CartItem.css';

/**
 * CartItem Component (Cart Page)
 * Displays all items in the shopping cart
 * Users can:
 * - View item details (image, name, price)
 * - Increase/decrease quantity
 * - Delete items
 * - See total cart amount
 * - Continue shopping or checkout
 */
function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  // Get cart data from Redux store
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  /**
   * Handle item deletion
   * @param {number} itemId - ID of item to remove
   */
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  /**
   * Handle quantity increase
   * @param {number} itemId - ID of item to increase
   */
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  /**
   * Handle quantity decrease
   * @param {number} itemId - ID of item to decrease
   */
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  /**
   * Handle Checkout Click - Show coming soon message
   */
  const handleCheckout = () => {
    setCheckoutClicked(true);
    setTimeout(() => {
      setCheckoutClicked(false);
    }, 3000);
  };

  /**
   * Handle Continue Shopping - Navigate back to products
   */
  const handleContinueShopping = () => {
    navigate('/products');
  };

  // Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>🛒 Your Cart is Empty</h2>
          <p>Start shopping to add items to your cart!</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>🛒 Shopping Cart</h1>

      <div className="cart-content">
        {/* Cart Items Section */}
        <div className="cart-items-section">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through all cart items */}
              {cartItems.map((item) => (
                <tr key={item.id} className="cart-item-row">
                  {/* Product Image and Name */}
                  <td className="product-cell">
                    <span className="product-image">{item.image}</span>
                    <span className="product-name">{item.name}</span>
                  </td>

                  {/* Unit Price */}
                  <td className="price-cell">
                    ${item.price.toFixed(2)}
                  </td>

                  {/* Quantity Controls */}
                  <td className="quantity-cell">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecreaseQuantity(item.id)}
                      title="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncreaseQuantity(item.id)}
                      title="Increase quantity"
                    >
                      +
                    </button>
                  </td>

                  {/* Total Price for Item */}
                  <td className="total-price-cell">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>

                  {/* Delete Button */}
                  <td className="action-cell">
                    <button
                      className="delete-btn"
                      onClick={() => handleRemoveItem(item.id)}
                      title="Remove item from cart"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Summary Section */}
        <div className="cart-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>

            {/* Summary Details */}
            <div className="summary-details">
              <div className="summary-row">
                <span>Total Items:</span>
                <span className="summary-value">{totalQuantity}</span>
              </div>

              <div className="summary-row total-price-row">
                <span>Total Price:</span>
                <span className="summary-value total-amount">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Message */}
            {checkoutClicked && (
              <div className="checkout-message">
                ✅ Coming Soon! Checkout will be available soon.
              </div>
            )}

            {/* Action Buttons */}
            <div className="cart-actions">
              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                💳 Proceed to Checkout
              </button>
              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
