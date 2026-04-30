# Quick Start Guide - Paradise Nursery

## 🚀 Getting Started in 5 Minutes

### 1. Prerequisites
- Node.js v14+ installed
- npm or yarn package manager

### 2. Installation
```bash
cd /Users/swayamgurnule/Developer/Projects/mark
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
- Opens automatically at `http://localhost:3000`
- Hot module reloading enabled
- See changes in real-time

### 4. Build for Production
```bash
npm run build
```
- Creates optimized `dist/` folder
- Ready for deployment

## 📖 Project Navigation

### Landing Page `/`
- Display: Hero section with company branding
- Action: "Get Started" button → navigates to /products

### Products Page `/products`
- Display: 21+ plants in 3 categories
- Categories:
  1. **Indoor Plants** - 7 products
  2. **Outdoor Plants** - 7 products
  3. **Succulents** - 7 products
- Actions:
  - Add to Cart (button disables after adding)
  - View cart count in navbar badge

### Cart Page `/cart`
- Display: All cart items in table format
- Actions:
  - Increase quantity with `+` button
  - Decrease quantity with `-` button
  - Delete item with `Delete` button
  - View total price
  - "Checkout" button (Coming Soon)
  - "Continue Shopping" button

### About Us Page `/about`
- Display: Company information
- Sections:
  - Our Story
  - Mission & Vision
  - Core Values
  - Why Choose Us
  - Contact Information

### Navbar (all pages except landing)
- Links: Home, Plants, About Us
- Cart Icon: Shows item count badge
- Sticky positioning at top

## 🛠️ Code Structure

### Redux Store (`src/redux/`)
```
store.js → configureStore with cartReducer
     ↓
cartSlice.js → Actions: addToCart, removeFromCart, 
                        increaseQuantity, decreaseQuantity
     ↓
State: { items: [], totalQuantity, totalPrice }
```

### Components (`src/components/`)
- **Navbar.jsx** - Navigation with cart counter

### Pages (`src/pages/`)
- **ProductList.jsx** - Product catalog
- **CartItem.jsx** - Shopping cart management
- **AboutUs.jsx** - Company information

### Styles (`src/styles/`)
- **ProductList.css** - Product page styling
- **CartItem.css** - Cart page styling
- **AboutUs.css** - About page styling
- **App.css** - Global app styling
- **index.css** - Base styles and utilities

## 📝 Common Tasks

### Add a New Product
Edit `src/pages/ProductList.jsx` → add to `products` object:
```javascript
{
  id: 22,
  name: 'Product Name',
  price: 29.99,
  image: '🌿',
  description: 'Product description',
}
```

### Change Colors
Edit `src/index.css` → update CSS variables:
```css
:root {
  --primary-color: #48bb78;  /* Green */
  --secondary-color: #2d3748; /* Dark Gray */
  /* ... more variables */
}
```

### Modify Cart Logic
Edit `src/redux/cartSlice.js` → update reducers in `reducers:` object

### Add New Page
1. Create component in `src/pages/YourPage.jsx`
2. Add styles in `src/styles/YourPage.css`
3. Add route in `src/App.jsx`:
```javascript
<Route path="/your-path" element={<YourPage />} />
```
4. Add link in `src/components/Navbar.jsx`

## 🎨 Styling Guide

### Responsive Breakpoints
```css
/* Desktop */
@media (max-width: 1024px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

### Colors Used
- **Green** (#48bb78) - Primary action buttons
- **Dark Gray** (#2d3748) - Text and backgrounds
- **Light Gray** (#f7fafc) - Page background
- **Red** (#f56565) - Delete buttons
- **Gradient** - Landing page background

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Cache Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Errors
```bash
npm run build
# Check for TypeScript/linting errors
# All files should be in src/ with correct imports
```

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔍 Performance Tips

1. **Code Splitting** - Vite handles automatically
2. **Lazy Loading** - Routes can be lazy loaded
3. **Redux DevTools** - Install browser extension for debugging
4. **React DevTools** - Install browser extension for component debugging

## 📚 File Import Paths

### Import Components
```javascript
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import AboutUs from './pages/AboutUs';
```

### Import Redux
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import store from '../redux/store';
```

### Import Styles
```javascript
import '../App.css';
import '../styles/ProductList.css';
```

## 🧪 Testing the Application

1. **Test Landing Page**
   - Click "Get Started" → Should navigate to /products

2. **Test Products**
   - Add items to cart → Button should disable and change text
   - Check navbar badge → Should show item count

3. **Test Cart**
   - Increase/decrease quantity → Total price should update
   - Delete item → Item should be removed
   - Empty cart message → Should display when cart is empty

4. **Test Navigation**
   - All navbar links → Should navigate correctly
   - Cart badge → Should update in real-time

## 📦 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
Add to `vite.config.js`:
```javascript
export default {
  base: '/paradise-nursery/',
}
```

## 🆘 Support

For issues:
1. Check browser console for errors (F12)
2. Check Redux DevTools for state issues
3. Verify all dependencies are installed
4. Clear cache: `npm run build`

## 📖 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit Guide](https://redux-toolkit.js.org)
- [React Router Docs](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)

---

**Happy Coding! 🌿**
