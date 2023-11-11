import React from 'react';
import './BookCard.css'
const BookCard = () => {
    return (
        <div className={"BookCard"}>
            {/*kids book img*/}
            <img className={"Book_img"} src="https://m.media-amazon.com/images/I/71TEJjGgHnL._SL1500_.jpg" alt="kids book"/>
            {/*kids book title*/}
            <h2 className={"Book_title"}>Dog Man 10: Mothering Heights (The New Blockbusting International Bestseller)</h2>
            {/*kids book author*/}
            <h3 className={"Book_author"}>Dav Pilkey</h3>
        </div>
    );
};

export default BookCard;
