import React from 'react';
import './Nav_bar.css'

const Nav_bar = () => {
    return (
        <nav className={"nav_bar"}>
            <div className={"nav_text"}>
                <h1>PUBLIC KIDS STORIES</h1>
            </div>
            <ul className={"nav_links"}>
                <li><a href={"#"}>Become A Author</a></li>
                <li><a href={"#"}>Sign In</a></li>
                <img className={"pfp"} src={"https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"} alt={"user"}/>
            </ul>
        </nav>
    );
};

export default Nav_bar;
