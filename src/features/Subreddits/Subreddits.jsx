import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, loadSubreddits } from "./subredditSlice";
import { getPictureUrl, defProf } from '../../utils/getPictureUrl.js'
import './Subreddits.css';

const Subreddits = () => {

    const dispatch = useDispatch()
    const subreddits = useSelector(selectSubreddits);
    console.log(subreddits)

    useEffect(() => {
        dispatch(loadSubreddits())
    }, [dispatch])

    return (
        <>
        <div className="sub">
            <h2>Subreddits</h2>
            {subreddits.map((subreddit) => (
                <button className="sub-button">
                <div className="avi" style={{backgroundImage: `url(${subreddit.icon_img ? subreddit.icon_img : getPictureUrl(subreddit.community_icon) ? getPictureUrl(subreddit.community_icon) : defProf})`}}></div>
                <p>{subreddit.display_name}</p>
            </button>
            ))}
        </div>
        </>
    );
};

export default Subreddits;
