import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectComments, selectLoadingComments } from "../../slices/subredditPostsSlice";
import { AnimatedList } from 'react-animated-list';
import './Modal.css'
import Comments from "../../features/Comments/Comments";
import CommentSkeleton from "../../features/Comments/CommentSkeleton";
import getRandomNumber from "../../utils/getRandomNumber";
import Skeleton from "react-loading-skeleton";

const Modal = props => {

    const comments = useSelector(selectComments);
    const loadingComments = useSelector(selectLoadingComments);
    console.log(comments)

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title"><FaComments/> {comments.length || <Skeleton inline={true} width={30}/>} Comments</h4>
                    <button className="modal-button" onClick={props.onClose}><IoMdCloseCircle/></button>
                </div>
                <div className="modal-body">
                    {loadingComments ? <AnimatedList animation="zoom">
                {Array(getRandomNumber(3, 10)).fill(<CommentSkeleton />)}
            </AnimatedList> : comments.map(comment => (
                        <Comments comment={comment}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal;