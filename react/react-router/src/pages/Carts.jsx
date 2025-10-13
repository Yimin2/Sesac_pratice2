import React from 'react';
import {Link} from "react-router-dom"
import CartsList from "../components/CartsList.jsx";

function Carts(props) {
    return (<div>
    carts
        <CartsList/>
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

export default Carts;