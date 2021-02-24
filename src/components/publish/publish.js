import React, {useState} from "react";
import BtnPublish from "./btnPublish";
import "./publish.scss";

export default function Publish(props) {
    const {
        postValue,
        handleChangePostValue,
        addPost,
        showButton
    } = props;

    return (
        <section className="border publish">
            <form onSubmit={addPost}>
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder={"Escribe aqui tu estado"}
                    value={postValue}
                    onChange={handleChangePostValue}
                />
            </form>
            {showButton &&
                <div className="left border-top">
                    <BtnPublish onClick={addPost}/>
                </div>
            }

        </section>
    )
}