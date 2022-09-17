import React, {useState} from "react";
import moment from "moment/moment";
import './Comments.css'
import { getPictureUrl } from "../../utils/getUrl";
import shortenNumber from "../../utils/shortenNumber";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb"

const Comments = ({comment}) => {

    const [commentImg, setCommentImg] = useState('')

    const getCommentImg = async (name) => {
        
        try {
            const response = await fetch(`https://api.reddit.com/user/${name}/about.json`);
            const json = await response.json()
            if(json.data.icon_img.indexOf('?') !== -1) {
                setCommentImg(getPictureUrl(json.data.icon_img));
            } else {
                setCommentImg(json.data.icon_img);
            }
            
        } catch (error) {
            console.log(error)
        }

    }

    getCommentImg(comment.author)

    return (
        <div>
            <div className="comment-title">
                <div className="comment-img" style={{backgroundImage: `url(${commentImg})`}}></div>
                <p className="bold">{comment.author}</p>
                <p className="grey"> . {moment.unix(comment.created_utc).fromNow()}</p>
            </div>
            <div className="comment-body">
                <p>{comment.body}</p>
                <p className="comment-body-vote"><TbArrowBigTop style={{marginRight: '5px'}} className="comment-arrow comment-arrow-up" />{shortenNumber(comment.score, 1)}<TbArrowBigDown style={{marginLeft: '5px'}} className="comment-arrow comment-arrow-down"/></p>
                {/* {comment.replies && comment.replies.data.children.map(reply => (
                        <Comments comment={reply.data}/>
                    ))} */}
            </div>
        </div>
    )
}

export default Comments;