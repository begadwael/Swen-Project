import React from 'react';
import './Catalogue.css'
import BookCard from "../Book_card/BookCard";
const Catalogue = () => {
    return (
        <div className={"catalogue"}>
            <BookCard id="0" />
            <BookCard id="1"/>
            <BookCard id="2"/>
            <BookCard id="0" />
            <BookCard id="1"/>
            <BookCard id="2"/>
            <BookCard id="0" />
            <BookCard id="1"/>
            <BookCard id="2"/>
            <BookCard id="0" />
        </div>
    );
};

export default Catalogue;
