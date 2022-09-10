import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredPosts, 
  loadSubredditPosts, 
  selectSelectedSubreddit, 
  selectIsLoading, 
  selectSearchTerm, 
  setSearchTerm,
  selectHasError } from "../../slices/subredditPostsSlice";
import './Feed.css'
import Post from "../Post/Post";
import PostSkeleton from "../Post/PostSkeleton";
import getRandomNumber from "../../utils/getRandomNumber";
import { AnimatedList } from 'react-animated-list';

const Feed = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectHasError);
    const searchTerm = useSelector(selectSearchTerm)
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

    if (error) {
        return (
            <div className="no-post">
                <h2>Failed to load posts</h2>
                <button onClick={() => dispatch(loadSubredditPosts(selectedSubreddit))}>Try again</button>
            </div>
        )
    }

    if(posts.length === 0 ) {
        return (
            <div className="no-post">
                <h2>No posts matching "{searchTerm}"</h2>
                <button onClick={() => dispatch(setSearchTerm(''))}>Go home</button>
            </div>
        );
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
