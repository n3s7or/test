import React from "react";
import TimeAgo from "../timeago/timeago";
import "./comment.scss";
import Thumbnail from "./60x60.png";

export default function Reply({data}) {
    let {name, date, avatar, comment} = data;

    return (
        <div className="comment-container">
            <div className="media">
                <img src={Thumbnail} alt="placeholder"/>
            </div>
            <div className="content">
                <div className="reply">
                    <h4>{name.split(' ')[0]}</h4>
                    <div className="comment-text">
                        <p>{comment}</p>
                    </div>
                </div>
                <TimeAgo date={date} />
            </div>
        </div>
    )
}