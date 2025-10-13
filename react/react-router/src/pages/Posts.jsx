import React from 'react';
import {Link} from "react-router-dom"
import PostList from "../components/PostList.jsx";

function Posts(props) {
    return (<div>posts
    <PostList/>
        <Link to="/">home</Link>
        <br/>
        <Link to="/dummy/carts">carts</Link>
        <br/>
        <Link to="/dummy/posts">posts</Link>
        <br/>
        <Link to="/dummy/products">products</Link>
        <br/>
    </div>);
}

export default Posts;