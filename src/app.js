import React from "react";
import "./scss/global.scss";

import Navbar from "./components/navbar/navbar";
import Publish from "./components/publish/publish";
import Comment from "./components/comment/comment";
import {IconContext} from "react-icons";

// import data from "./data.json";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            user: '',
            postValue: ''
        }

        this.handleChangePostValue = this.handleChangePostValue.bind(this);
        this.addReply = this.addReply.bind(this);
        this.addReaction = this.addReaction.bind(this);
        this.publish = this.publish.bind(this);
    }

    componentDidMount() {
        this.setState({
            // data: data,
            user: 'Juan Perex'
        })
    }

    handleChangePostValue(e) {
        e.preventDefault();
        this.setState({postValue: e.target.value})
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

            return {data: [
                    ...state.data.slice(0,index),
                    comment,
                    ...state.data.slice(index+1)
                ]}
        });
        return true;
    }

    addReaction(id) {
    //    This basically add a new reaction to the comment
        let index = this.state.data.findIndex((v,i, arr)=>arr[i].id===id);
        if (index === -1) {
            return false;
        }

        this.setState((state, props) => ({
            data: [
                ...state.data.slice(0, index),
                Object.assign(
                    {},
                    state.data[index],
                    {
                        "reactions": state.data[index].reactions + 1
                    }),
                ...state.data.slice(index + 1)
            ]
        }))
    }

    publish(e) {
        e.preventDefault();

        if (!this.state.postValue)
            return;

        this.setState((state, props)=> {
            let newPost = {
                "id": state.data.length,
                "name": this.state.user,
                "date": Date.now(),
                // "avatar": "shit",
                "comment": state.postValue,
                "reactions": 0,
                "replies": []
            }
            return {
                data: [
                    ...state.data,
                    Object.assign({}, state.data, newPost)
                ],
                postValue: ""
            };
        })
    }

    render(){
        return(
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="main">
                    <Navbar
                        user={this.state.user}
                        handlePublish={this.publish}
                    />

                    <Publish
                        postValue={this.state.postValue}
                        handlePublish={this.publish}
                        handleChangePostValue={this.handleChangePostValue}
                        showButton={true}
                    />

                    {this.state.data.map((comment)=>(
                        <Comment
                            key={comment.id}
                            data={comment}
                            addReply={this.addReply}
                            addReaction={this.addReaction}
                        />
                    ))}
                </div>
            </IconContext.Provider>
        );
    }
}

export default App;
