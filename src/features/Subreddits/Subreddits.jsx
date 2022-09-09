import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, loadSubreddits } from "../../slices/subredditsSlice";
import { getPictureUrl, defProf } from '../../utils/getUrl.js'
import { setSubredditInfo, setSelectedSubreddit } from "../../slices/subredditPostsSlice";
import './Subreddits.css';

const Subreddits = () => {

    const dispatch = useDispatch()
    const subreddits = useSelector(selectSubreddits);

    useEffect(() => {
        dispatch(loadSubreddits())
    }, [dispatch])

    return (
        <>
        <div className="sub">
            <h2>Subreddits</h2>
            {subreddits.map((subreddit) => (
                <button className="sub-button" onClick={() => {
                    dispatch(setSubredditInfo({
                        name: subreddit.display_name,
                        image: subreddit.icon_img ? subreddit.icon_img : getPictureUrl(subreddit.community_icon) ? getPictureUrl(subreddit.community_icon) : defProf,
                        background: getPictureUrl(subreddit.banner_background_image) ? getPictureUrl(subreddit.banner_background_image) : subreddit.banner_img,
                        description: subreddit.public_description
                    }));
                    dispatch(setSelectedSubreddit(subreddit.url));
                    document.documentElement.scrollTop = 0;
                }}>
                <div className="avi" style={{backgroundImage: `url(${subreddit.icon_img ? subreddit.icon_img : getPictureUrl(subreddit.community_icon) ? getPictureUrl(subreddit.community_icon) : defProf})`}}></div>
                <p>{subreddit.display_name}</p>
            </button>
            ))}
        </div>
        </>
    );
};

export default Subreddits;
