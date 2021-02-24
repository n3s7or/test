import React, {useState} from "react";
import "./publish.scss";

export default function Publish({addPost}) {
    const [postValue, setPostValue] = useState("")
    return (
        <section className="border publish">
            <form onSubmit={e=>{
                e.preventDefault();
                addPost(postValue);
                setPostValue("")
            }}>
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder={"Escribe aqui tu estado"}
                    value={postValue}
                    onChange={(e)=>setPostValue(e.target.value)}
                />
            </form>
            <div className="left border-top">
                <a href="#" className="button">Publicar</a>
            </div>
        </section>
    )
}