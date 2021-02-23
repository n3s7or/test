import React from "react";
import Publish from "./publish/publish";
import Comment from "./comment/comment.js";
import Navbar from "./navbar/navbar";
import {IconContext} from "react-icons";
import data from "../data.json";


export default function Layout() {
    return(
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className="main">
                <Navbar />
                <Publish />
                {data.map((comment, index)=>(
                    <Comment
                        key={index}
                        data={comment}
                    />
                ))}
            </div>
        </IconContext.Provider>
    );
}
