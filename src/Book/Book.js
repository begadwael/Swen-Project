import React from 'react';
import './book.css'
import Nav_bar from "../Header/Nav_bar";
import dog_1 from "./dog_1.jpg";
import dog_2 from "./dog_2.jpg";

const Book = () => {
    return (
        <div>
            <Nav_bar/>

            <div className="bookinfo shadow-5">
                <div className="bookdescription">
                    <img className="bookcover" src="https://m.media-amazon.com/images/I/71TEJjGgHnL._SL1500_.jpg" alt="bookcover"/>
                    <h1>Dog Man 10: Mothering Heights (The New Blockbusting International Bestseller)</h1>
                    <h2>Dav Pilkey</h2>
                    
                    
                    <div className='rating'>
                        <h2>Rating: 4 stars</h2>
                        <div className='stars'>
                            <span className='star active'>★</span>
                            <span className='star active'>★</span>
                            <span className='star active'>★</span>
                            <span className='star active'>★</span>
                            <span className='star'>★</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bookinfo shadow-5">
                    <div className='commentSection'>
                        <div className='comment'>
                            <span>
                                <h2 className='name'>John Doe</h2> 
                                <div className='stars'>
                                <span className='star active'>★</span>
                                <span className='star active'>★</span>
                                <span className='star active'>★</span>
                                <span className='star active'>★</span>
                                <span className='star active'>★</span>
                        </div>
                            </span>
                            <p className='comment'>lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
            </div>

            <div className="bookinfo shadow-5">
                    <div className='commentSection'>
                        <div className='comment'>
                            <span>
                                <h2 className='name'>Jane Doe</h2> 
                                <div className='stars'>
                                <span className='star active'>★</span>
                                <span className='star active'>★</span>
                                <span className='star active'>★</span>
                                <span className='star'>★</span>
                                <span className='star'>★</span>
                        </div>
                            </span>
                            <p className='comment'>lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Book;
