import React from 'react';
import './Catalogue.css'
import BookCard from "../Book_card/BookCard";
const Catalogue = () => {
    return (
        <div className={"catalogue"}>
            <BookCard />
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </div>
    );
};

export default Catalogue;
