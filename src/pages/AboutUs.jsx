import React from 'react';
import '../styles/AboutUs.css';

/**
 * AboutUs Component
 * Displays company information including:
 * - About Paradise Nursery
 * - Mission and Vision
 * - Company values and history
 */
function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Page Header */}
      <div className="about-header">
        <h1>🌿 About Paradise Nursery</h1>
        <p>Growing Green, One Plant at a Time</p>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* About Section */}
        <section className="about-section">
          <div className="section-icon">🌳</div>
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded in 2010 with a simple mission: to make beautiful,
            healthy plants accessible to everyone. What started as a small local garden shop
            has grown into a thriving online community of plant lovers, gardeners, and
            nature enthusiasts.
          </p>
          <p>
            We believe that plants have the power to transform spaces, improve air quality,
            and bring joy to our lives. That's why we're committed to providing the highest
            quality plants and gardening supplies to our customers worldwide.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="section-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To provide healthy, vibrant plants and expert gardening advice to every customer,
            making plant ownership accessible and enjoyable for all. We strive to create a
            supportive community where plant enthusiasts can grow, learn, and share their passion.
          </p>
          <ul className="mission-points">
            <li>✅ Provide premium quality plants</li>
            <li>✅ Offer expert gardening guidance</li>
            <li>✅ Ensure fast and reliable delivery</li>
            <li>✅ Build a thriving plant community</li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="about-section vision-section">
          <div className="section-icon">🌍</div>
          <h2>Our Vision</h2>
          <p>
            We envision a world where every home, office, and public space is filled with
            thriving plants and greenery. By promoting sustainable gardening practices and
            environmental awareness, we aim to contribute to a healthier planet for future
            generations.
          </p>
          <p>
            Our vision extends beyond commerce—we want to inspire people to connect with
            nature, embrace green living, and create beautiful botanical spaces in their lives.
          </p>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <h2 className="values-title">🌱 Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">♥️</div>
              <h3>Passion</h3>
              <p>We love plants and care deeply about our customers' satisfaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We build lasting relationships with our customers and community.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>We practice eco-friendly methods to protect our environment.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in quality and service.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-section why-section">
          <h2>Why Choose Paradise Nursery?</h2>
          <div className="why-points">
            <div className="why-item">
              <span className="why-icon">🌟</span>
              <div>
                <h3>Premium Quality Plants</h3>
                <p>Carefully selected and nurtured plants from trusted growers</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">📦</span>
              <div>
                <h3>Secure Packaging</h3>
                <p>Plants arrive healthy and ready to thrive in your home</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">🚚</span>
              <div>
                <h3>Fast Shipping</h3>
                <p>Quick delivery to get your plants to you in perfect condition</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">💬</span>
              <div>
                <h3>Expert Support</h3>
                <p>Dedicated customer service and gardening advice</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">🔒</span>
              <div>
                <h3>Secure Shopping</h3>
                <p>Safe and reliable checkout process</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">🎁</span>
              <div>
                <h3>Special Offers</h3>
                <p>Regular discounts and loyalty rewards for our customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-section contact-section">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <p>📧 Email: <strong>hello@paradisenursery.com</strong></p>
            <p>📞 Phone: <strong>(555) 123-4567</strong></p>
            <p>📍 Location: <strong>Growing Green City, GC 12345</strong></p>
            <p>🕐 Hours: <strong>Monday - Sunday, 9 AM - 6 PM</strong></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
