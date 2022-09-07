import React from "react";
import { FaComments, FaArrowUp, FaArrowDown } from "react-icons/fa";
import './Post.css';

const Post = () => {
    return (
        <>
        <div className="post">
            <div className="voting">
                <FaArrowUp className="up-vote"/>
                <p>1.3k</p>
                <FaArrowDown/>
            </div>
            <div className="post-info">
                <p>KalabraxTheWicked</p>
                <p id="time">2 hours ago</p>
                <h3>Uruguayan miners accidentally discovered this stunning heart-shaped amethyst geode</h3>
                <img src={require("../../images/img1.jpg")} alt="pic" />
                <button className="comment-button">
                    <span><FaComments/> 47 Comments</span>
                </button>
            </div>
        </div>
        <div className="post">
            <div className="voting">
                <FaArrowUp className="up-vote"/>
                <p>4.7k</p>
                <FaArrowDown/>
            </div>
            <div className="post-info">
                <p>_Im_Dad</p>
                <p id="time">4 hours ago</p>
                <h3>Leak resistant cup, no need for a lid.</h3>
                <button className="comment-button">
                    <span><FaComments/> 648 Comments</span>
                </button>
            </div>
        </div>
        <div className="post">
            <div className="voting">
                <FaArrowUp className="up-vote"/>
                <p>2.0k</p>
                <FaArrowDown/>
            </div>
            <div className="post-info">
                <p>The_Love-Tap</p>
                <p id="time">6 hours ago</p>
                <h3>Identifying Medieval English Longbows</h3>
                <img src={require("../../images/img2.jpg")} alt="pic" />
                <button className="comment-button">
                    <span><FaComments/> 79 Comments</span>
                </button>
            </div>
        </div>
        </>
    );
};

export default Post;

