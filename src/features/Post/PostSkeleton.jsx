import { FaComments, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './Post.css';
import getRandomNumber from "../../utils/getRandomNumber";

const PostSkeleton = () => {
    return (
        <div className="post">
        <div className="voting">
            <FaArrowUp className="up-vote"/>
            <p><Skeleton/></p>
            <FaArrowDown/>
        </div>
        <div className="post-info">
            <p><Skeleton width={80} inline={true}/></p>
            <p id="time"><Skeleton width={80} inline={true}/></p>
            <h3><Skeleton count={getRandomNumber(1, 2)}/></h3>
            <Skeleton className="img-skeleton"/>
            <button className="comment-button">
            <span><FaComments style={{display: 'inline'}}/> <Skeleton inline={true}/></span>
            </button>
        </div>
    </div>  
    )
}

export default PostSkeleton