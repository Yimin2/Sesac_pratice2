import React from 'react';
import {Link} from "react-router-dom"
import ProductList from "../components/ProductList.jsx";

function Products(props) {
    return (<div>products
    <ProductList/>
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

export default Products;