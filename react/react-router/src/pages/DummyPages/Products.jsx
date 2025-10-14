import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom"
import ProductList from "../../components/ProductList.jsx";
import axios from "axios";

function Products(props) {
    const [proudcts, setProudcts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({})

    const sortBy = searchParams.get("sortBy") ?? "id"
    const order = searchParams.get("order") ?? "asc"

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`)
            setProudcts(response.data.products)
        }

        getProducts()
    }, [searchParams]);


    return (<div>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "asc", sortBy: "price"}))}>가격 오름차순
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "desc", sortBy: "price"}))}>가격 내림차순
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "asc", sortBy: "id"}))}>id 오름차순
        </button>
        <button className="border-2 p-2 m-2 cursor-pointer"
                onClick={() => (setSearchParams({order: "desc", sortBy: "id"}))}>id 내림차순
        </button>
        <br/>
        {proudcts.map((product) => (
            <Link key={product.id} to={`/dummy/products/${product.id}`}>{product.id} - {product.title} <br/></Link>
        ))}
    </div>);
}

export default Products;