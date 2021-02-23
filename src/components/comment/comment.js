import React from "react";
import Reply from "./reply";
import "./comment.scss";
import Thumbnail from "./60x60.png";

export default function Comment({data}) {
    let {name, date, avatar, comment, replies} = data;
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
                <a href="#">Comentar</a>
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
                { replies.length > 0 &&
                    <input type="text" name="reply" placeholder="Escribe un comentario"/>
                }
            </div>
        </section>
    )
}

