import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, loadSubreddits, selectIsLoading } from "../../slices/subredditsSlice";
import Subreddits from "../Subreddits/Subreddits";
import './SubredditList.css';
import SubredditSkeleton from "../Subreddits/SubredditSkeleton";
import getRandomNumber from "../../utils/getRandomNumber";
import { AnimatedList } from 'react-animated-list';

const SubredditList = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const subreddits = useSelector(selectSubreddits);

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

    return (
        <div className="sub">
            <h2>Subreddits</h2>
            {subreddits.map(subreddit => (
                <Subreddits subreddit={subreddit}/>
            ))}
        </div>
    )
}

export default SubredditList