import React from "react";
import Publish from "./publish/publish";
import Comment from "./comment/comment.js";

export default function Layout() {
    return(
        <div className="main">
            <Publish />
            <Comment />
        </div>
    );
}
