import React from "react";
import './Header.css'
import { FaReddit, FaUser } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon"/>
                <p>Reddit<span>App</span></p>
            </div>
            <form>
               <input type='text' placeholder='Search'/> 
               <button>
                    <ImSearch className="search"/>
               </button>
            </form>
            <FaUser className="prof"/>
        </header>
    );
}

export default Header;