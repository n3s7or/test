import React from "react";
import "./publish.scss";

export default function Publish() {
    return (
        <section>
            <input
                type="text"
                id="state"
                name="state"
                placeholder={"Escribe aqui tu estado"}
            />
            <div className="left border-top">
                <a href="#" className="button">Publicar</a>
            </div>
        </section>
    )
}