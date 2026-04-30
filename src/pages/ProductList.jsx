import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/ProductList.css';

/**
 * ProductList Component
 * Displays plants organized by 3 categories (Indoor, Outdoor, Succulents)
 * Each category has 6+ plants
 * Users can add items to cart with Add to Cart button
 */
function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // Track which items have been added to cart
  const [addedItems, setAddedItems] = useState({});

  // Product Database with 3 categories
  const products = {
    'Indoor Plants': [
      {
        id: 1,
        name: 'Monstera Deliciosa',
        price: 45.99,
        image: '🌿',
        description: 'Popular indoor plant with large leaves',
      },
      {
        id: 2,
        name: 'Pothos (Devil\'s Ivy)',
        price: 24.99,
        image: '🍃',
        description: 'Low maintenance trailing plant',
      },
      {
        id: 3,
        name: 'Snake Plant (Sansevieria)',
        price: 35.99,
        image: '🌱',
        description: 'Air purifying, drought resistant',
      },
      {
        id: 4,
        name: 'Philodendron',
        price: 32.99,
        image: '🌿',
        description: 'Heart-shaped leaves, easy to care',
      },
      {
        id: 5,
        name: 'Peace Lily',
        price: 29.99,
        image: '🌸',
        description: 'Elegant plant with white flowers',
      },
      {
        id: 6,
        name: 'ZZ Plant',
        price: 38.99,
        image: '🌿',
        description: 'Glossy green leaflets, very hardy',
      },
      {
        id: 7,
        name: 'Fiddle Leaf Fig',
        price: 49.99,
        image: '🍂',
        description: 'Statement plant with large leaves',
      },
    ],
    'Outdoor Plants': [
      {
        id: 8,
        name: 'Hydrangea',
        price: 39.99,
        image: '🌸',
        description: 'Beautiful flowering shrub',
      },
      {
        id: 9,
        name: 'Rose Bush',
        price: 34.99,
        image: '🌹',
        description: 'Classic garden favorite',
      },
      {
        id: 10,
        name: 'Lavender',
        price: 22.99,
        image: '💜',
        description: 'Fragrant purple flowers',
      },
      {
        id: 11,
        name: 'Sunflower',
        price: 19.99,
        image: '🌻',
        description: 'Tall bright yellow flowers',
      },
      {
        id: 12,
        name: 'Tulips (Bulbs)',
        price: 14.99,
        image: '🌷',
        description: 'Spring blooming flowers',
      },
      {
        id: 13,
        name: 'Hibiscus',
        price: 44.99,
        image: '🌺',
        description: 'Tropical flowering plant',
      },
      {
        id: 14,
        name: 'Jasmine Vine',
        price: 36.99,
        image: '🌿',
        description: 'Fragrant climbing vine',
      },
    ],
    'Succulents': [
      {
        id: 15,
        name: 'Aloe Vera',
        price: 18.99,
        image: '🌿',
        description: 'Medicinal succulent plant',
      },
      {
        id: 16,
        name: 'Jade Plant',
        price: 26.99,
        image: '💚',
        description: 'Thick-leaved succulent',
      },
      {
        id: 17,
        name: 'Echeveria',
        price: 21.99,
        image: '🌸',
        description: 'Rosette-shaped succulent',
      },
      {
        id: 18,
        name: 'Cactus Mix',
        price: 16.99,
        image: '🌵',
        description: 'Desert succulent collection',
      },
      {
        id: 19,
        name: 'Haworthia',
        price: 23.99,
        image: '🌱',
        description: 'Striped miniature succulent',
      },
      {
        id: 20,
        name: 'Sedum Stonecrop',
        price: 19.99,
        image: '🟢',
        description: 'Low maintenance succulent',
      },
      {
        id: 21,
        name: 'Sempervivum (Hens & Chicks)',
        price: 25.99,
        image: '🌿',
        description: 'Hardy rosette succulent',
      },
    ],
  };

  /**
   * Handle Add to Cart Button Click
   * @param {object} product - Product to add to cart
   */
  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    
    // Mark item as added
    setAddedItems(prev => ({
      ...prev,
      [product.id]: true,
    }));
  };

  /**
   * Check if item is already in cart
   * @param {number} productId - Product ID
   * @returns {boolean} - Whether item is in cart
   */
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId) || addedItems[productId];
  };

  return (
    <div className="product-list-container">
      <div className="product-header">
        <h1>🌍 Paradise Nursery - Our Collections</h1>
        <p>Browse our beautiful selection of plants for every space</p>
      </div>

      {/* Loop through each product category */}
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {/* Loop through products in category */}
            {items.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button
                    className={`add-to-cart-btn ${isInCart(product.id) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
