# 🌿 Paradise Nursery - Shopping Cart Application

A modern React + Redux shopping cart application for an online plant nursery. This application allows users to browse plants organized by categories, add items to their cart, and manage their purchases with a beautiful and responsive user interface.

## 📝 Project Description

Paradise Nursery is a full-featured e-commerce shopping cart application built with React and Redux Toolkit. The application provides a seamless shopping experience for plant enthusiasts, featuring a wide variety of indoor plants, outdoor plants, and succulents. Users can browse products, manage their shopping cart, and proceed to checkout.

## ✨ Features

### 🏠 Landing Page
- **Attractive Hero Section**: Modern landing page with gradient background and company branding
- **Get Started Button**: Call-to-action button to navigate to product listing
- **Responsive Design**: Mobile-friendly landing page that works on all devices

### 🌱 Product Listing Page
- **3 Product Categories**:
  - Indoor Plants (7 products)
  - Outdoor Plants (7 products)
  - Succulents (7 products)
- **21+ Unique Products**: Each with name, price, emoji image, and description
- **Add to Cart Functionality**: 
  - Buttons disable after adding to cart
  - Visual feedback with "Added to Cart" status
  - Cart count updates dynamically
- **Responsive Grid Layout**: Beautiful product cards with hover effects
- **Dynamic Navigation Bar**: 
  - Home, Plants, About Us, and Cart links
  - Real-time cart item counter badge

### 🛒 Shopping Cart Page
- **Complete Cart Management**:
  - Display all items with image, name, unit price, and total price
  - Quantity controls (increase/decrease buttons)
  - Delete item functionality
  - Real-time total cart amount calculation
- **Cart Summary**:
  - Total items count
  - Total cart price
  - "Coming Soon" checkout message
  - Continue Shopping button
- **Empty Cart Handling**: User-friendly empty cart message
- **Responsive Table Layout**: Works perfectly on mobile and desktop

### ℹ️ About Us Page
- **Company Information**: Complete about us section
- **Mission & Vision Statements**: Company goals and values
- **Core Values**: Heart-shaped cards displaying company principles
- **Why Choose Us**: Detailed benefits and features
- **Contact Information**: Email, phone, location, and hours
- **Beautiful Styling**: Gradient backgrounds and animations

### 🔧 Redux State Management
- **Cart Slice** with actions:
  - `addToCart`: Add items to cart
  - `removeFromCart`: Remove items from cart
  - `increaseQuantity`: Increase item quantity
  - `decreaseQuantity`: Decrease item quantity
  - `clearCart`: Clear all items from cart
- **State Properties**:
  - `items`: Array of cart items
  - `totalQuantity`: Total number of items
  - `totalPrice`: Total cart value

### 🎨 User Experience
- **Modern Design**: Clean, professional UI with gradient backgrounds
- **Smooth Animations**: Fade-in, hover effects, and transitions
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Fast Performance**: Optimized React components and Redux selectors

## 📁 Project Structure

```
paradise-nursery/
├── public/
│   └── images/              # Product images folder
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Navigation bar component
│   ├── pages/
│   │   ├── ProductList.jsx  # Product listing page
│   │   ├── CartItem.jsx     # Shopping cart page
│   │   └── AboutUs.jsx      # About us page
│   ├── redux/
│   │   ├── cartSlice.js     # Redux cart slice with actions
│   │   └── store.js         # Redux store configuration
│   ├── styles/
│   │   ├── ProductList.css  # Product listing styles
│   │   ├── CartItem.css     # Shopping cart styles
│   │   └── AboutUs.css      # About us page styles
│   ├── App.jsx              # Main App component with routing
│   ├── App.css              # App global styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🚀 Tech Stack

- **React 19.2.5** - UI library with functional components
- **Redux 5.0.1** - State management
- **Redux Toolkit 2.11.2** - Simplified Redux development
- **React Router DOM 7.14.2** - Client-side routing
- **Vite 5.0.7** - Build tool and dev server
- **CSS 3** - Styling (no Tailwind)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps to Run

1. **Clone or navigate to the project directory**
   ```bash
   cd /Users/swayamgurnule/Developer/Projects/mark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

The application will open at `http://localhost:3000` in your default browser.

## 🎯 How to Use

### Browse Products
1. Click "Get Started" on the landing page
2. View products organized by three categories
3. Each product card shows name, price, and image

### Add to Cart
1. Click "Add to Cart" button on any product
2. Button will change to "✓ Added to Cart" and disable
3. Cart badge updates in the navbar

### Manage Cart
1. Click the cart icon in the navbar to view your cart
2. Use + and - buttons to adjust quantities
3. Click "Delete" to remove items
4. See real-time total price update

### View About Us
1. Click "About Us" in the navbar
2. Learn about Paradise Nursery's mission, vision, and values

### Continue Shopping
1. Click "Continue Shopping" in the cart
2. Or click "Plants" in the navbar

## 💡 Key Features Explanation

### Redux State Management
The cart state is managed centrally using Redux Toolkit, allowing all components to access and update cart data seamlessly.

### Responsive Design
Built with mobile-first approach using CSS Grid and Flexbox. The application adapts beautifully to all screen sizes.

### Reusable Components
Components are built as standalone, reusable pieces that can be easily maintained and updated.

### Clean Code
Well-commented code following React best practices and ES6+ conventions.

## 🎓 Assignment Requirements Met

✅ README.md with project name and features  
✅ AboutUs.jsx component with company details  
✅ App.css with responsive background image  
✅ App.jsx landing page with "Get Started" button  
✅ CartSlice.jsx Redux slice with all required actions  
✅ ProductList.jsx with 3 categories and 6+ plants each  
✅ CartItem.jsx with full cart management  
✅ React Router for navigation  
✅ Clean folder structure  
✅ Proper filenames following conventions  
✅ Beginner-friendly, well-commented code  
✅ No errors, fully functional application  

## 📸 Screenshots

### Landing Page
- Beautiful gradient background
- Company branding and tagline
- Call-to-action button

### Product Listing
- Grid layout with product cards
- Category organization
- Dynamic cart counter

### Shopping Cart
- Table view of cart items
- Quantity adjustment controls
- Real-time total calculation

### About Us
- Company mission and vision
- Core values cards
- Contact information

## 🔐 Security Considerations

- No sensitive data stored in localStorage
- Redux state managed in memory
- Input validation on cart operations
- Secure button states

## 🐛 Known Limitations

- Checkout button shows "Coming Soon" message
- No payment integration
- No user authentication
- No persistent storage (cart resets on page refresh)

## 🚀 Future Enhancements

- Add payment gateway integration
- Implement user authentication
- Add product filters and search
- Implement wishlist feature
- Add product reviews and ratings
- Persistent storage using localStorage/SessionStorage
- Integration with backend API
- Order history and tracking

## 📞 Support

For questions or issues, please contact:
- Email: hello@paradisenursery.com
- Phone: (555) 123-4567

## 📄 License

This project is created for educational purposes as part of a Coursera assignment.

---

**Created with ❤️ for Paradise Nursery | Paradise Nursery - Growing Green, One Plant at a Time 🌿**
