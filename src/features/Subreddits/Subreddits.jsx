import React from "react";
import './Subreddits.css';

const Subreddits = () => {
    return (
        <>
        <div className="sub">
            <h2>Subreddits</h2>
            <button className="sub-button">
                <div className="avi" id="avi1">

                </div>
                <p>Home</p>
            </button>
            <button className="sub-button">
                <div className="avi" id="avi2">

                </div>
                <p>Damnthatsinteresting</p>
            </button>
            <button className="sub-button">
                <div className="avi" id="avi3">

                </div>
                <p>WhitePeopleTwitter</p>
            </button>
        </div>
        </>
    );
};

export default Subreddits;