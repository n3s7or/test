import React from "react";
import "./comment.scss";
import Thumbnail from "./60x60.png";

export default function Comment() {
    return (
        <section className="comment-container">
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
                    <div className="comment-actions">
                        <a href="#">Reaccionar</a>
                        <a href="#">Comentar</a>
                    </div>
                </main>
            </div>

        </section>
    )
}