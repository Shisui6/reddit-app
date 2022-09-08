import React from "react";
import { AiOutlineArrowDown } from 'react-icons/ai'
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-back"></div>
            <div className="profile-img"></div>
            <h1>WhitePeopleTwitter</h1>
            <p className="profile-sub">r/WhitePeopleTwitter</p>
            <p className="profile-view">Posts</p>
            <AiOutlineArrowDown className="profile-arrow"/>
        </div>
    );
};

export default Profile;