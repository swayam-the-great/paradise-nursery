import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Configure Redux Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
