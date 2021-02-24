import React from "react";
import "./scss/global.scss";

import Navbar from "./components/navbar/navbar";
import Publish from "./components/publish/publish";
import Comment from "./components/comment/comment";
import {IconContext} from "react-icons";

import data from "./data.json";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            user: 'Juan Perex'
        }

        this.addReply = this.addReply.bind(this);
    }

    addReply(commentId, comment) {
        if (!comment.trim())
            return false;

        let index = this.state.data.findIndex((v,i, arr)=>arr[i].id===commentId);
        if (index === -1) {
            return false;
        }

        this.setState((state, props) => {
            let reply = {
                "name": state.user,
                "date": Date.now(),
                // "avatar": "shit",
                "comment": comment
            }

            comment = Object.assign({}, state.data[index]);
            comment.replies.push(reply);

            let updatedData = [
                ...state.data.slice(0,index),
                comment,
                ...state.data.slice(index+1)
            ]

            return {data: updatedData}
        });
        return true;
    }

    render(){
        return(
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="main">
                    <Navbar />
                    <Publish />
                    {this.state.data.map((comment)=>(
                        <Comment
                            key={comment.id}
                            data={comment}
                            addReply={this.addReply}
                        />
                    ))}
                </div>
            </IconContext.Provider>
        );
    }
}

export default App;
