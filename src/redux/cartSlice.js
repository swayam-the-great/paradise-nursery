import { createSlice } from '@reduxjs/toolkit';

// Redux Slice for managing shopping cart state
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }
      
      // Update total quantity and total price
      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item) {
        // Decrease total quantity and price based on current quantity
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        
        // Remove item from cart
        state.items = state.items.filter(item => item.id !== itemId);
      }
    },

    // Increase quantity of an item
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    // Decrease quantity of an item
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        // Remove item if quantity reaches 0
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
        state.items = state.items.filter(i => i.id !== itemId);
      }
    },

    // Clear cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
