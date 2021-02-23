import React from "react";
import Publish from "./publish/publish";
import Comment from "./comment/comment.js";
import Navbar from "./navbar/navbar";
import {BiMenu} from "react-icons/bi";
import {IconContext} from "react-icons";

export default function Layout() {
    return(
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className="main">
                <Navbar />
                <Publish />
                <Comment />
            </div>
        </IconContext.Provider>
    );
}
