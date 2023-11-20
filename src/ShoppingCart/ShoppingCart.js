import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
    return (
        <div className="container">
        <header>
          <h1>Shopping Cart</h1>
        </header>
        
        <section className="products" id="product-list">
          {/* Fixed item with an image */}
          <div className="product fixed-item">
            <img src="book.png" alt="Book" />
            <p>Dog Man 10: Mothering Heights (The New Blockbusting International Bestseller)<br />
            Day Pilkey</p>
            <p>$16.00</p>
            <button>Add to Cart</button>
          </div>
  
          {/* Flexible items (Add more items as needed) */}
          <div className="product">
            <img src="book1.jpg" alt="Book 1" />
            <p>Book 1</p>
            <p>$20.00</p>
            <button>Add to Cart</button>
          </div>
  
          <div className="product">
            <img src="book2.jpg" alt="Book 2" />
            <p>Book 2</p>
            <p>$18.00</p>
            <button>Add to Cart</button>
          </div>
  
          {/* Add more flexible items as needed */}
        </section>
  
        <section className="cart">
          <h2>Shopping Cart</h2>
          <ul id="cart-items">
            {/* Cart items will be dynamically added here */}
          </ul>
          <p>Total: $<span id="total">0.00</span></p>
          <button>Checkout</button>
        </section>
      </div>

        );
    }
  
  
  export default ShoppingCart;