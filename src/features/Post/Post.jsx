import React from "react";
import { FaComments, FaArrowUp, FaArrowDown } from "react-icons/fa";
import moment from "moment/moment";
import './Post.css';
import shortenNumber from "../../utils/shortenNumber";
import { getVideoUrl } from "../../utils/getUrl";
import { toggleShowComments, loadComments } from "../../slices/subredditPostsSlice";
import { useDispatch } from "react-redux";


const Post = ({post, index}) => {

    const dispatch = useDispatch()

    return (
        <>
        <div className="post">
            <div className="voting">
                <FaArrowUp className="post-vote-up" style={{cursor: 'pointer'}}/>
                <p>{shortenNumber(post.ups, 1)}</p>
                <FaArrowDown className="post-vote-down" style={{cursor: 'pointer'}}/>
            </div>
            <div className="post-info">
                <p>{post.author}</p>
                <p id="time">{moment.unix(post.created_utc).fromNow()}</p>
                <h3>{post.title}</h3>
                {post.url.includes('jpg') || post.url.includes('png') ? <img src={post.url} alt=" " /> : post.media && post.media.reddit_video ? <video controls>
                <source src={post.media.reddit_video.fallback_url} type="video/mp4"/>
                Your browser does not support the video tag.
                </video> : post.media && post.media.oembed ? <iframe src={getVideoUrl(post.media.oembed.html)} title='video'> </iframe> : <p></p>}

                <button className="comment-button" onClick={() => {
                    dispatch(toggleShowComments(true))
                    dispatch(loadComments(post.permalink))}}>
                    <FaComments/> 
                    <span>{shortenNumber(post.num_comments, 1)} Comments</span>
                </button>
            </div>
        </div>  
        </>
    );
};

export default Post;

