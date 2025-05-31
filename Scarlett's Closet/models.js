body {
  background-color: black;
  color: white;
  font-family: 'Playfair Display', serif;
  text-align: center;
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
}

/* Title in top-left */
.hero-title {
  position: absolute;
  top: 50px;
  left: 30px;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  z-index: 10;
}

.hero-title:hover {
  color: #ff6347;
}

/* Shopping Bag button */
.cart-button {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 1rem;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  padding: 6px 12px;
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  transition: background 0.3s ease, color 0.3s ease;
  z-index: 10;
}

.cart-button:hover {
  background-color: #ff6347;
  color: white;
}

/* Product Display Area */
.product-display {
  margin-top: 160px;
  text-align: center;
}

.product-display img {
  max-width: 350px;
  border-radius: 10px;
  margin-bottom: 20px;
}

/* Add to Shopping Bag Button */
.add-to-bag-button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}

.add-to-bag-button:hover {
  background-color: #ff6347;
  color: white;
}

/* Footer */
footer {
  margin-top: 60px;
  padding: 20px 0;
  font-size: 0.9rem;
  color: #aaa;
  z-index: 2;
  position: relative;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.1rem;
    top: 15px;
    left: 20px;
  }

  .cart-button {
    top: 15px;
    right: 20px;
    font-size: 0.9rem;
    padding: 5px 10px;
  }

  .product-display img {
    max-width: 90%;
  }

  .add-to-bag-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
