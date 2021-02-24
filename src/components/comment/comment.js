import React, {useState} from "react";
import Reply from "./reply";
import "./comment.scss";
import Thumbnail from "./60x60.png";

export default function Comment({data}) {
    let {name, date, avatar, comment, replies} = data;

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
                        <span className="small">{date}</span>
                    </header>
                    <main>
                        <div className="comment-text">
                            <p>{comment}</p>
                        </div>
                    </main>
                </div>
            </div>

            {/*Comments summary*/}
            <div className="comment-summary-mobile border-top">
                <p>000</p>
                <p className="push"><span>{replies.length > 0 ? replies.length : "0"}</span> comentarios</p>
            </div>

            {/*Comments actions*/}
            <div className="comment-actions-mobile border-bottom border-top">
                <a href="#">Reaccionar</a>
                <a className="divider" />
                <a href="#" onClick={(e)=>{
                    e.preventDefault();
                    setShowCommentInput(true)
                }}>Comentar</a>
            </div>

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
            </div>
            { showCommentInput > 0 &&

            <form onSubmit={(e)=> {
                e.preventDefault();
                console.log('yay')
            }}><input
                type="text"
                name="reply"
                placeholder="Escribe un comentario"
                value={commentValue}
                onChange={(e)=>{
                    setCommentValue(e.target.value)
                }}
                // onKeyPress={handleKeyPress}
            /></form>
            }
        </section>
    )
}

