import React, {useEffect, useState} from 'react';
import axios from "axios";
import Product from "./Product.jsx";

function ProductContainer() {
    const [product, setProduct] = useState([])
    const [sortedProduct, setSortedProduct] = useState([])

    useEffect(() => {
        async function getProduct() {
            const data = await axios.get(`https://dummyjson.com/products`)
            setProduct(data.data.products)
            setSortedProduct(data.data.products)
        }

        getProduct()
    }, []);

    const sortByIdAsc = () => {
        setSortedProduct([...product].sort((a, b) => a.id - b.id))
    }

    const sortByIdDesc = () => {
        setSortedProduct([...product].sort((a, b) => b.id - a.id))
    }

    const sortByPriceAsc = () => {
        setSortedProduct([...product].sort((a, b) => a.price - b.price))
    }

    const sortByPriceDesc = () => {
        setSortedProduct([...product].sort((a, b) => b.price - a.price))
    }

    const sortByRatingAsc = () => {
        setSortedProduct([...product].sort((a, b) => a.rating - b.rating))
    }

    const sortByRatingDesc = () => {
        setSortedProduct([...product].sort((a, b) => b.rating - a.rating))
    }

    return (<div>
        <button className="border-2 px-2 text-white bg-blue-400"
                onClick={sortByIdAsc}>ID ↑
        </button>
        <button className="border-2 px-2 text-white bg-blue-400"
                onClick={sortByIdDesc}>ID ↓
        </button>
        <button className="border-2 px-2 text-white bg-blue-400"
                onClick={sortByPriceAsc}>가격 ↑
        </button>
        <button className="border-2 px-2 text-white bg-blue-400"
                onClick={sortByPriceDesc}>가격 ↓
        </button>
        <button className="border-2 px-2 text-white bg-blue-400"
                onClick={sortByRatingAsc}>평점 ↑
        </button>
        <button className="border-2 px-2 text-white bg-blue-400"
                onClick={sortByRatingDesc}>평점 ↓
        </button>
        {sortedProduct.map((e) => {
            return <Product key={e.id} product={e}/>
        })}
    </div>);
}

export default ProductContainer;