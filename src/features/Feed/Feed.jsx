import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredPosts, 
  loadSubredditPosts, 
  selectSelectedSubreddit, 
  selectLoadingPosts, 
  selectSearchTerm, 
  setSearchTerm,
  selectShowComments,
  toggleShowComments,
  resetComments,
  selectErrorPosts } from "../../slices/subredditPostsSlice";
import './Feed.css'
import Post from "../Post/Post";
import PostSkeleton from "../Post/PostSkeleton";
import getRandomNumber from "../../utils/getRandomNumber";
import { AnimatedList } from 'react-animated-list';
import Modal from "../../components/Modal/Modal";

const Feed = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const postLoading = useSelector(selectLoadingPosts);
    const postError = useSelector(selectErrorPosts);
    const searchTerm = useSelector(selectSearchTerm);
    const showComments = useSelector(selectShowComments);
   

    useEffect(() => {
        dispatch(loadSubredditPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);

    if(postLoading) {
        return (
            <AnimatedList animation="zoom">
                {Array(getRandomNumber(3, 10)).fill(<PostSkeleton />)}
            </AnimatedList>
        )
    }

    if (postError) {
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
            {posts.map((post, index) => (
            <Post post={post} key={post.id} index={index}/>
        ))}
        {showComments ? document.body.style.overflow = 'hidden': document.body.style.overflow = ''}
        <Modal show={showComments} onClose={() => {dispatch(toggleShowComments(false)); dispatch(resetComments())}}/>
        </>
    )
}

export default Feed;
