import React from 'react';
import './Nav_bar.css'
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

const Nav_bar = () => {
    return (
        <nav className={"nav_bar"}>
            <div className={"nav_text"}>
                <h1>PUBLIC KIDS STORIES</h1>
            </div>
            <ul className={"nav_links"}>
                <li><Link to='/SignUp' element={< SignUp />}> Become A Author</Link></li>
                <li><Link to='/SignIn' element={< Login />}> Sign In </Link></li>
                <img className={"pfp"} src={"https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"} alt={"user"}/>
            </ul>
        </nav>
    );
};

export default Nav_bar;
