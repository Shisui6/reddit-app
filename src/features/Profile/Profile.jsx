import React from "react";
import { useSelector } from "react-redux";
import { selectSubredditInfo } from "../../slices/subredditPostsSlice";
import { AiOutlineArrowDown } from 'react-icons/ai'
import './Profile.css';

const Profile = () => {

    const subredditInfo = useSelector(selectSubredditInfo);

    return (
        <div className="profile">
            <div className="profile-back" style={{backgroundImage: `url(${subredditInfo.background})`}}></div>
            <div className="profile-img" style={{backgroundImage: `url(${subredditInfo.image})`}}></div>
            <h1>{subredditInfo.name}</h1>
            <p className="profile-sub">{subredditInfo.subName}</p>
            <p className="profile-desc">{subredditInfo.description}</p>
            <p className="profile-view">Posts</p>
            <AiOutlineArrowDown className="profile-arrow"/>
        </div>
    );
};

export default Profile;