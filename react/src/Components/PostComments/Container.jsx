import React from 'react';
import Comment from "./Comment.jsx";
import Post from "./Post.jsx";

function Container(props) {
    return (<div>
    <Post/>
    <Comment/>
    </div>);
}

export default Container;