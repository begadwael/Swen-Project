import React from 'react';
import './Author.css';
import users from '../db/authors.json';
import { Link } from 'react-router-dom';

const Author = () => {
    // change the ID to view the different users (0, 1, and 2)
    const profile = users.find(user => user.id === 2);
    const profileImg = "https://www.w3schools.com/howto/img_avatar.png";

    return (
        <div className='container'>
            <header>
                <h1>Author Profile</h1>
                <Link to='/'>
                    <button>Sign Out</button>
                </Link>
            </header>

            <div className='profile'>
                <img src={profileImg} alt='avatar' className='idPic' />
                <h1><strong>Name:</strong> {profile["name"]}</h1>
                <h1><strong>Email:</strong> {profile["email"]}</h1>
                <h1><strong>Age:</strong> {profile["age"]} years</h1>
            </div>

            <div className='profileStats'>
                <h1><strong>Books Purchased:</strong> {profile["Wrote"]} books</h1>
                <h1><strong>Book reads this month:</strong> {profile["reads"]}</h1>
                <h1><strong>All time book reads:</strong> {profile["allTimeReads"]}</h1>
                <h1><strong>User Since: </strong> {profile["dateJoined"]}</h1>
            </div>
        </div>
    );

};

export default Author;