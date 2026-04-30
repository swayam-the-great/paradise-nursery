# Paradise Nursery - Project File Structure & Guide

## 📁 Complete Project Structure

```
paradise-nursery/
│
├── public/
│   └── images/                    # Product images folder (for future use)
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx            # Navigation bar with cart counter
│   │
│   ├── pages/
│   │   ├── ProductList.jsx       # Product listing with 3 categories, 21+ plants
│   │   ├── CartItem.jsx          # Shopping cart page with management
│   │   └── AboutUs.jsx           # Company information page
│   │
│   ├── redux/
│   │   ├── cartSlice.js          # Redux Toolkit slice with cart actions
│   │   └── store.js              # Redux store configuration
│   │
│   ├── styles/
│   │   ├── ProductList.css       # Product listing page styles
│   │   ├── CartItem.css          # Shopping cart page styles
│   │   └── AboutUs.css           # About us page styles
│   │
│   ├── App.jsx                   # Main app with routing & landing page
│   ├── App.css                   # App global styles with responsive design
│   ├── main.jsx                  # React entry point with Redux Provider
│   └── index.css                 # Global styles and CSS utilities
│
├── .gitignore                    # Git ignore patterns
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── package.json                  # Project dependencies & scripts
├── package-lock.json             # Dependency lock file
├── README.md                     # Project documentation
└── PROJECT_STRUCTURE.md          # This file
```

## 📄 File Descriptions

### Configuration Files

**vite.config.js**
- Vite build tool configuration
- React plugin setup
- Development server on port 3000

**package.json**
- Project metadata and scripts
- npm dependencies list
- Build and development commands

**index.html**
- HTML entry point
- Root DOM element for React
- Script reference to main.jsx

### Main Application Files

**src/main.jsx**
- React application entry point
- Redux Provider wrapping App component
- React StrictMode for development warnings

**src/App.jsx**
- Main routing component using React Router
- Landing page component
- Routes for /products, /cart, /about
- Navbar rendering for all pages except landing

**src/App.css**
- Landing page styles with gradient background
- Navbar styling
- Responsive design with media queries
- Button styles and animations

**src/index.css**
- Global styles for entire application
- CSS custom properties (variables)
- Utility classes for spacing and layout
- Scrollbar styling

### Components

**src/components/Navbar.jsx**
- Navigation bar with links
- Home, Plants, About Us, Cart navigation
- Dynamic cart item counter badge
- Responsive mobile menu

### Pages

**src/pages/ProductList.jsx**
- Product catalog with 3 categories:
  1. Indoor Plants (7 products)
  2. Outdoor Plants (7 products)
  3. Succulents (7 products)
- Add to Cart functionality with button states
- Product grid layout
- 21+ unique plant products

**src/pages/CartItem.jsx**
- Shopping cart display
- Cart item management:
  - Quantity increase/decrease
  - Delete item functionality
  - Real-time price calculation
- Checkout button with "Coming Soon" message
- Continue Shopping navigation
- Empty cart handling

**src/pages/AboutUs.jsx**
- Company story and history
- Mission statement
- Vision for the future
- Core values (4 value cards)
- Why Choose Us benefits
- Contact information

### Styles

**src/styles/ProductList.css**
- Product grid layout
- Product card styling with hover effects
- Category section styling
- Responsive design for mobile

**src/styles/CartItem.css**
- Cart table styling
- Quantity control buttons
- Delete button styling
- Cart summary section
- Checkout message styling
- Responsive table layout

**src/styles/AboutUs.css**
- About page section styling
- Mission and vision styling
- Values grid layout
- Contact section styling
- Smooth animations and transitions

### Redux

**src/redux/cartSlice.js**
Redux Toolkit slice with 5 actions:
- `addToCart(product)` - Add item to cart
- `removeFromCart(itemId)` - Remove item from cart
- `increaseQuantity(itemId)` - Increase item quantity
- `decreaseQuantity(itemId)` - Decrease item quantity
- `clearCart()` - Clear entire cart

State structure:
```javascript
{
  items: [],           // Array of cart items
  totalQuantity: 0,    // Total number of items
  totalPrice: 0        // Total cart value
}
```

**src/redux/store.js**
- Redux store configuration using configureStore
- Cart reducer registration
- Centralized state management

### Documentation

**README.md**
- Comprehensive project documentation
- Feature list and descriptions
- Installation and setup instructions
- Usage guide
- Tech stack information
- Project structure overview

## 🎯 Key Features

### Landing Page
- Hero section with gradient background
- Company branding
- "Get Started" call-to-action button
- Responsive design

### Product Listing
- 3 categories with 7+ products each
- Product cards with emoji images
- Add to Cart buttons with states
- Dynamic cart counter
- Responsive grid layout

### Shopping Cart
- Display all cart items in table format
- Quantity adjustment controls
- Delete item functionality
- Real-time total calculation
- Checkout button (Coming Soon)
- Continue Shopping option

### About Us
- Company story
- Mission and vision statements
- Core values section
- Why Choose Us benefits
- Contact information

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.5 | UI Framework |
| Redux | 5.0.1 | State Management |
| Redux Toolkit | 2.11.2 | Simplified Redux |
| React Router | 7.14.2 | Client-side Routing |
| Vite | 8.0.10 | Build Tool |
| CSS 3 | - | Styling |

## 💾 Application State

The Redux store maintains:
- **Cart Items**: Array of products in cart
- **Total Quantity**: Sum of all item quantities
- **Total Price**: Sum of all item prices

All state updates are handled by Redux reducers for predictable state management.

## 🎨 Design Features

- Gradient backgrounds and modern styling
- Hover effects and animations
- Responsive grid layouts
- Mobile-first approach
- Accessibility considerations
- Clean, professional UI

## ✅ Assignment Requirements Checklist

- [x] README.md with project name and features
- [x] AboutUs.jsx with company details
- [x] App.css with responsive background
- [x] App.jsx with landing page and Get Started button
- [x] CartSlice.jsx with all Redux actions
- [x] ProductList.jsx with 3 categories and 6+ plants each
- [x] CartItem.jsx with full cart management
- [x] React Router for navigation
- [x] Clean folder structure
- [x] Proper filenames
- [x] Well-commented code
- [x] No build errors
- [x] Fully functional application

---

**Paradise Nursery - Growing Green, One Plant at a Time 🌿**
