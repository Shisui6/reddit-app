import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, loadSubreddits, selectIsLoading, selectHasError } from "../../slices/subredditsSlice";
import Subreddits from "../Subreddits/Subreddits";
import './SubredditList.css';
import SubredditSkeleton from "../Subreddits/SubredditSkeleton";
import getRandomNumber from "../../utils/getRandomNumber";
import { AnimatedList } from 'react-animated-list';

const SubredditList = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const subreddits = useSelector(selectSubreddits);
    const error = useSelector(selectHasError);

    useEffect(() => {
        dispatch(loadSubreddits())
    }, [dispatch]);

    if(isLoading) {
        return (
            <div className="sub">
                <h2>Subreddits</h2>
                <AnimatedList animation="zoom">
                    {Array(getRandomNumber(3, 10)).fill(<SubredditSkeleton />)}
                </AnimatedList>
            </div>
        )
    }

    if (error) {
        return (
            <div className="sub">
                <h2>Subreddits</h2>
                <div className="no-post">
                    <p>Failed to load subreddit list</p>
                    <button onClick={() => dispatch(loadSubreddits())}>Try again</button>
                </div>
            </div>
        )
    }

    return (
        <div className="sub">
            <h2>Subreddits</h2>
            {subreddits.map(subreddit => (
                <Subreddits subreddit={subreddit} key={subreddit.id}/>
            ))}
        </div>
    )
}

export default SubredditList