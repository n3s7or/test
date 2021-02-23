import React from "react";
import "./comment.scss";
import Thumbnail from "./60x60.png";

export default function Comment() {
    return (
        <section className="comments border">
            {/*Comment container*/}
            <div className="comment-container">
                <div className="media">
                    <img src={Thumbnail} alt="placeholder"/>
                </div>
                <div className="content">
                    <header>
                        <h4>Juan Perez Sipriano</h4>
                        <span className="small">Hace 41 minutos</span>
                    </header>
                    <main>
                        <div className="comment-text">
                            <p>Lorem ipsum kamikaze</p>
                        </div>
                    </main>
                </div>
            </div>

            {/*Comments summary*/}
            <div className="comment-summary-mobile border-top">
                <p>000</p>
                <p className="push"><span>3</span> comentarios</p>
            </div>

            {/*Comments actions*/}
            <div className="comment-actions-mobile border-bottom border-top">
                <a href="#">Reaccionar</a>
                <a className="divider" />
                <a href="#">Comentar</a>
            </div>

            {/*Comment replies */}
            <div className="comment-replies">
                <div className="comment-container">
                    <div className="media">
                        <img src={Thumbnail} alt="placeholder"/>
                    </div>
                    <div className="content">
                        <div className="reply">
                            <h4>Juan</h4>
                            <div className="comment-text">
                                <p>Lorem ipsum kamikaze. this is a really long reply to that fucking message tou did</p>
                            </div>
                        </div>
                        <span className="small">Hace 2 minutos</span>
                    </div>
                </div>
                <input type="text" name="reply" placeholder="Escribe un comentario"/>
            </div>
        </section>
    )
}

