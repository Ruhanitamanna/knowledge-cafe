import React from 'react';
import './Header.css';
import logo from '../images/joli.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <h1>Steps To Programming</h1>
            <img src={logo}alt="" />

        </nav>
    );
};

export default Header;