import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, loadSubredditPosts, selectSelectedSubreddit } from "../../slices/subredditPostsSlice";
import shortenNumber from "../../utils/shortenNumber";
import './Feed.css'
import Post from "../Post/Post";

const Feed = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    console.log(posts)

    useEffect(() => {
        dispatch(loadSubredditPosts(selectedSubreddit));
    }, [selectedSubreddit])

    return (
        <>
            {posts.map((post) => (
            <Post post={post} key={post.id}/>
        ))}
        </>
    )
}

export default Feed;
