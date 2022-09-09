import React from "react";
import { useDispatch } from "react-redux";
import { getPictureUrl, defProf } from '../../utils/getUrl.js'
import { setSubredditInfo, setSelectedSubreddit } from "../../slices/subredditPostsSlice";
import './Subreddits.css';

const Subreddits = ({subreddit}) => {

    const dispatch = useDispatch();

    const selectImage = () => {
        if (subreddit.icon_img) {
            return subreddit.icon_img;
        } 
        else if (getPictureUrl(subreddit.community_icon)) {
            return getPictureUrl(subreddit.community_icon);
        }
        else {
            return defProf
        }
    }

    const selectBackground = () => {
        if (getPictureUrl(subreddit.banner_background_image)) {
            return getPictureUrl(subreddit.banner_background_image)
        } else {
            return subreddit.banner_img
        }
    }

    const handleClick = () => {
        const subredditInfo = {
            name: subreddit.display_name,
            image: selectImage(),
            background: selectBackground(),
            description: subreddit.public_description
        };

        dispatch(setSubredditInfo(subredditInfo));
        dispatch(setSelectedSubreddit(subreddit.url));
        document.documentElement.scrollTop = 0;

    }

    return (
        <button className="sub-button" onClick={handleClick}>
            <div className="avi" style={{backgroundImage: `url(${selectImage()})`}}></div>
                <p>{subreddit.display_name}</p>
        </button>
    );
};

export default Subreddits;
