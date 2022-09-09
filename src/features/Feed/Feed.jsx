import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, loadSubredditPosts, selectSelectedSubreddit, selectIsLoading } from "../../slices/subredditPostsSlice";
import './Feed.css'
import Post from "../Post/Post";
import PostSkeleton from "../Post/PostSkeleton";
import getRandomNumber from "../../utils/getRandomNumber";
import { AnimatedList } from 'react-animated-list';

const Feed = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const isLoading = useSelector(selectIsLoading)
    console.log(posts)

    useEffect(() => {
        dispatch(loadSubredditPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);

    if(isLoading) {
        return (
            <AnimatedList animation="zoom">
                {Array(getRandomNumber(3, 10)).fill(<PostSkeleton />)}
            </AnimatedList>
        )
    }

    return (
        <>
            {posts.map((post) => (
            <Post post={post} key={post.id}/>
        ))}
        </>
    )
}

export default Feed;
