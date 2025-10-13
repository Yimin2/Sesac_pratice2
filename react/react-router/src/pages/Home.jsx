import {Link} from "react-router-dom"
import React from 'react';

export default function Home() {

    return (
        <div>
            <h1>홈 페이지</h1>
            <Link to="/">home</Link>
            <br/>
            <Link to="/dummy/carts">carts</Link>
            <br/>
            <Link to="/dummy/posts">posts</Link>
            <br/>
            <Link to="/dummy/products">products</Link>
            <br/>
        </div>
    );
}