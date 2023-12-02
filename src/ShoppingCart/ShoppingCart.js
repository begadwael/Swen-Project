import React from 'react';
import './ShoppingCart.css';
import books from '../db/books.json';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const book1 = books.find(book => book.id === 0);
    const book2 = books.find(book => book.id === 1);
    const book3 = books.find(book => book.id === 2);

    return (
        <div className="container">
            <header>
                <h1>Shopping Cart</h1>
                <Link to={'/'} className='homeBtnLink'>
                    <button className="Homebtn">Home</button>
                </Link>
            </header>
            
            <div className="books">

                <div className='book1'>
                    <img className="imgs" src={book1["img"]} alt="book" />
                    <p className='book_title'>{book1["title"]}</p>
                    <button className="btn">Buy Now</button>
                    <button className="btn remove">Remove</button>
                </div>

                <div className='book2'>
                    <img className="imgs" src={book2["img"]} alt="book" />
                    <p className='book_title'>{book2["title"]}</p>
                    <button className="btn">Buy Now</button>
                    <button className="btn remove">Remove</button>
                </div>

                <div className='book3'>
                    <img className="imgs" src={book3["img"]} alt="book" />
                    <p className='book_title'>{book3["title"]}</p>
                    <button className="btn">Buy Now</button>
                    <button className="btn remove">Remove</button>
                </div>

                <div className='checkout'>
                  <h3>Total: $100</h3>
                  <button className="btn">Checkout</button>
                </div>

          <div className='payment_methods'>
            <p>You can pay Via: </p>
            <ul>
              <li>PayPal</li>
              <li>Visa</li>
              <li>MasterCard</li>
            </ul>
          </div>
          
        </div>
      </div>
    );
}

export default ShoppingCart;
