import React, { useState, useEffect } from "react";
import './Header.css'
import { FaReddit, FaUser } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../../slices/subredditPostsSlice";

const Header = () => {

    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setLocalSearchTerm(e.target.value)
    }

    useEffect(() => {
        setLocalSearchTerm(searchTerm);
    }, [searchTerm])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(localSearchTerm))
    }

    return (
        <header>
            <div className="logo" data-testid="logo">
                <FaReddit className="logo-icon"/>
                <p>Reddit<span className="bold-orange">App</span></p>
            </div>
            <form data-testid="search" onSubmit={handleSubmit}>
               <input type='text' placeholder='Search' value={localSearchTerm} onChange={handleChange}/> 
               <button className="search-button" type="submit" disabled={!localSearchTerm}>
                    <ImSearch className="search"/>
               </button>
            </form>
            <FaUser className="prof" data-testid="profile"/>
        </header>
    );
}

export default Header;