import React from "react";
import sparkLogo from '../assets/sparkDarker.png'
import avatar from '../assets/avatar.jpg'

export function Header() {
    return(
    <header className="header-bar">
        <img src={sparkLogo} alt="Spark Logo" className="sparkLogo"/>
        <h1 className="logo"><a href="homepage.html" className="no-underline">SPARK</a></h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Community</a>
            <a href="#">Knowledge Zone</a>
            <a href="#">Personalized Updates</a>
        </nav>
         <img src={avatar} alt="Avatar" className="avatar"/>
         Tomahito Mori
    </header>
)
}

export default Header

