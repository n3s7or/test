import React, {useState} from "react";
import Reply from "./reply";
import TimeAgo from "../timeago/timeago";
import "./comment.scss";
import Thumbnail from "./60x60.png";


export default function Comment({data, addReply}) {
    let {
        id, name, date, avatar, comment, replies,
    } = data;

    const [showCommentInput, setShowCommentInput] = useState(replies.length > 0);
    const [commentValue, setCommentValue] = useState("");

    return (
        <section className="comments border">
            {/*Comment container*/}
            <div className="comment-container">
                <div className="media">
                    <img src={Thumbnail} alt="placeholder"/>
                </div>
                <div className="content">
                    <header>
                        <h4>{name}</h4>
                        <TimeAgo date={date}/>
                    </header>
                    <main>
                        <div className="comment-text">
                            <p>{comment}</p>
                        </div>
                    </main>
                </div>
            </div>
            {/*End comment container*/}

            {/*Comments summary*/}
            <div className="comment-summary-mobile border-top">
                <p>000</p>
                <p className="push"><span>{replies.length > 0 ? replies.length : "0"}</span> comentarios</p>
            </div>
            {/*End comment summary*/}

            {/*Comments actions*/}
            <div className="comment-actions-mobile border-bottom border-top">
                <a href="#">Reaccionar</a>
                <a className="divider" />
                <a href="#" onClick={(e)=>{
                    e.preventDefault();
                    setShowCommentInput(true);
                }}>Comentar</a>
            </div>
            {/*End comment actions*/}

            {/*Comment replies */}
            <div className="comment-replies">
                {/*Start replies*/}
                {replies.map((reply, index)=>(
                    <Reply
                        key={index}
                        data={reply}
                    />
                ))}
                {/*End replies*/}

                { showCommentInput > 0 &&
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    if (addReply(id, commentValue)) {
                        setCommentValue("");
                    }
                }}>
                    <input
                        type="text"
                        name="reply"
                        placeholder="Escribe un comentario"
                        value={commentValue}
                        onChange={(e)=>{setCommentValue(e.target.value)}}
                    />
                </form>
                }
            </div>
            {/*End comment replies*/}
        </section>
    )
}

