import React, {useState} from "react";
import "./publish.scss";

export default function Publish(props) {
    const {
        postValue,
        handleChangePostValue,
        handlePublish
    } = props;

    return (
        <section className="border publish">
            <form onSubmit={handlePublish}>
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder={"Escribe aqui tu estado"}
                    value={postValue}
                    onChange={handleChangePostValue}
                />
            </form>

            <div className="btn-publish border-top">
                <a
                    href="#"
                    className="button"
                    onClick={handlePublish}
                >Publicar</a>
            </div>

        </section>
    )
}