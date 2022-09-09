import React from "react";
import { useSelector } from "react-redux";
import { selectSubredditInfo } from "../../slices/subredditPostsSlice";
import './Profile.css';

const Profile = () => {

    const subredditInfo = useSelector(selectSubredditInfo);

    return (
        <div className="profile">
            <div className="profile-back" style={subredditInfo.background ? {backgroundImage: `url(${subredditInfo.background})`} : {backgroundImage: `url(${require('../../images/banner1.jpg')})`}}></div>
            <div className="profile-img" style={{backgroundImage: `url(${subredditInfo.image})`}}></div>
            <h1>{subredditInfo.name}</h1>
            <p className="profile-desc">{subredditInfo.description}</p>
        </div>
    );
};

export default Profile;