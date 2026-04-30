import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import AboutUs from './pages/AboutUs';

// Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Your One-Stop Shop for Beautiful Plants & Gardening Supplies</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route - No Navbar */}
        <Route path="/" element={<LandingPage />} />

        {/* All other routes with Navbar */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/cart" element={<CartItem />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
