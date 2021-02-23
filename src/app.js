import React from "react";
import "./scss/global.scss";

import Navbar from "./components/navbar/navbar";
import Publish from "./components/publish/publish";
import Comment from "./components/comment/comment";
import {IconContext} from "react-icons";

import data from "./data.json";

class App extends React.Component{
    render(){
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
}

export default App;
