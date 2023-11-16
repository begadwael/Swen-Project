import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div id="container" className={"shadow-5"}>

            <div id="search_bar">

                <form id="search_form">
                    <input type="text" id="search_input" name="search_input" placeholder="Search..."/>
                    <input type="submit" id="search_button" name="search_button" value="Search"/>
                </form>
            </div>

            <div id="categories">
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">1 - 2 Years</a></li>
                    <li><a href="#">3 - 5 Years</a></li>
                    <li><a href="#">6 - 8 Years</a></li>
                    <li><a href="#">8 - 10 Years</a></li>
                    <li><a href="#">10 and older</a></li>
                </ul>
            </div>

        </div>
    );
};


export default SearchBar;
