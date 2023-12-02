import React from 'react';
import './book.css'
import Nav_bar from "../Header/Nav_bar";


const Book = () => {
    return (
        <div>
            <Nav_bar/>
            <div className="bookinfo">
                <div className="bookdescription shadow-5">
                    <img className="bookcover" src="https://m.media-amazon.com/images/I/71zl4XJfvaL._AC_UF894,1000_QL80_.jpg" alt="bookcover"/>
                    <h1>The Diary Of A Wimpy Kid</h1>
                    <div className="bookdetails">
                        <h2>Jeff kinney</h2>


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

                        <button onClick={event => {
                            window.location.href='/bookView';
                        }} className="go-to-button">Go To Book</button>
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
        </div>
    );
};

export default Book;
