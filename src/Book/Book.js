import React from 'react';
import Nav_bar from "../Header/Nav_bar";
import './book.css'
import dog_1 from "./dog_1.jpg";
import dog_2 from "./dog_2.jpg";


// Whole page to be redesigned in sprint 4
// This page is a placeholder for the book page
const Book = () => {
    return (
        <div>
            <Nav_bar/>
            {/*FOLLOW THE STYLE SENT ON TRELLO AND WHATSAPP*/}
            <div className="bookinfo shadow-5">
                <div className="bookdescription">
                    <img className="bookcover" src="https://m.media-amazon.com/images/I/71TEJjGgHnL._SL1500_.jpg" alt="bookcover"/>
                    <h1>Dog Man 10: Mothering Heights (The New Blockbusting International Bestseller)</h1>
                    <h2>Dav Pilkey</h2>
                </div>
            </div>

            {/*COMMENT SECTION HERE*/}
            {/*    <Comment/>  */}
            {/*    <Comment/>  */}
            {/*    <Comment/>  */}
            
        </div>
    );
};

export default Book;
