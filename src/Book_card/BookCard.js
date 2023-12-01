import React from 'react';
import './BookCard.css'
import books from '../db/books.json';

const BookCard = (props) => {
    // hard coded variables for back up (begad you can change these if you want)
    const title = "Kids Book";
    const author = "Kids Author";
    const bookImage = "https://images-na.ssl-images-amazon.com/images/I/51ZU%2BZ7ZJTL._SX258_BO1,204,203,200_.jpg";

    // making the catalog dynamic
    const book1 = books.find(book => book.id === 0);
    const book2 = books.find(book => book.id === 1);
    const book3 = books.find(book => book.id === 2);
    const selectedBook = props.id;

    if (selectedBook === "0") {
        return (
            <div className={"BookCard"}>
                {/*kids book img*/}
                <img onClick={event => {
                    window.location.href='/book';
                }} className={"Book_img"} src={book1["img"]} alt="kids book"/>
                {/*kids book title*/}
                <h2 className={"Book_title"}>{book1["title"]}</h2>
                {/*kids book author*/}
                <h3 className={"Book_author"}>{book1["author"]}</h3>
            </div>
        );
    }

    else if (selectedBook === "1") {
        return (
            <div className={"BookCard"}>
                {/*kids book img*/}
                <img onClick={event => {
                    window.location.href='/book';
                }} className={"Book_img"} src={book2["img"]} alt="kids book"/>
                {/*kids book title*/}
                <h2 className={"Book_title"}>{book2["title"]}</h2>
                {/*kids book author*/}
                <h3 className={"Book_author"}>{book2["author"]}</h3>
            </div>
        );
    }

    else if (selectedBook === "2") {
        return (
            <div className={"BookCard"}>
                {/*kids book img*/}
                <img onClick={event => {
                    window.location.href='/book';
                }} className={"Book_img"} src={book3["img"]} alt="kids book"/>
                {/*kids book title*/}
                <h2 className={"Book_title"}>{book3["title"]}</h2>
                {/*kids book author*/}
                <h3 className={"Book_author"}>{book3["author"]}</h3>
            </div>
        );
    }
    
    else {
        return (
            <div className={"BookCard"}>
                {/*kids book img*/}
                <img onClick={event => {
                    window.location.href='/book';
                }} className={"Book_img"} src={bookImage} alt="kids book"/>
                {/*kids book title*/}
                <h2 className={"Book_title"}>{title}</h2>
                {/*kids book author*/}
                <h3 className={"Book_author"}>{author}</h3>
            </div>)
    }

};

export default BookCard;
