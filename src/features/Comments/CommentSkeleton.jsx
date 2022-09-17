import React from "react";
import Skeleton from "react-loading-skeleton";
import './Comments.css'
import getRandomNumber from "../../utils/getRandomNumber";

const CommentSkeleton = () => {
    return (
        <div>
            <div className="comment-title">
                <Skeleton circle width={40} height={40} inline={true}/>
                <p><Skeleton width={120} className="comment-skeleton comment-skeleton-position"/></p>
            </div>
            <div className="comment-body">
                {getRandomNumber(1,2) === 1 ? <p><Skeleton style={{width: `${getRandomNumber(9, 93)}%`}} className="comment-skeleton"/></p> : <><p style={{marginBottom: '0px'}}><Skeleton style={{width: `93%`}}  className="comment-skeleton"/></p><p><Skeleton style={{width: `${getRandomNumber(9, 90)}%`}} className="comment-skeleton"/></p></>}
                
            </div>
        </div>
    )
}

export default CommentSkeleton;