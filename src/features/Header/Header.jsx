import React from "react";
import './Header.css'
import { FaReddit, FaUser } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'

const Header = () => {
    return (
        <header>
            <div className="logo" data-testid="logo">
                <FaReddit className="logo-icon"/>
                <p>Reddit<span className="bold-orange">App</span></p>
            </div>
            <form data-testid="search">
               <input type='text' placeholder='Search'/> 
               <button className="search-button">
                    <ImSearch className="search"/>
               </button>
            </form>
            <FaUser className="prof" data-testid="profile"/>
        </header>
    );
}

export default Header;