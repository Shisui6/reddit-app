import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './Subreddits.css';
import getRandomNumber from "../../utils/getRandomNumber";

const SubredditSkeleton = () => {
    return (
        <div className="skeleton-button">
            <Skeleton circle width={40} height={40} inline={true}/>
            <Skeleton inline={true} width={getRandomNumber(30, 150)} className="skeleton-name"/>
        </div>
    )
}

export default SubredditSkeleton