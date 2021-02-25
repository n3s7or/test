import React, {useState} from "react";
import Reply from "./reply";
import Summary from "./summary";
import TimeAgo from "../timeago/timeago";
import "./comment.scss";
import Thumbnail from "./60x60.png";


export default function Comment({data, addReply, addReaction}) {
    let {
        id, name, date, avatar, comment, replies, reactions
    } = data;

    const [showCommentInput, setShowCommentInput] = useState(replies.length > 0);
    const [commentValue, setCommentValue] = useState("");

    function toReact(e) {
        e.preventDefault();
        addReaction(id)
    }

    function toShowCommentInput(e) {
        e.preventDefault();
        setShowCommentInput(true);
    }

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
                    <footer className="comment-actions">
                        <a href="#" onClick={toReact}>Reaccionar</a>
                        <a href="#" onClick={toShowCommentInput}>Comentar</a>
                    </footer>
                </div>
            </div>
            {/*End comment container*/}

            {/*Comments summary*/}
            { (replies.length > 0 || reactions > 0) &&
                <Summary
                    comments={replies.length}
                    reactions={reactions}
                />
            }
            {/*End comment summary*/}

            {/*Comments actions mobile*/}
            <div className="comment-actions-mobile border-bottom border-top">
                <a href="#" onClick={toReact}>Reaccionar</a>

                <a className="divider" />

                <a href="#" onClick={toShowCommentInput}>Comentar</a>
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

