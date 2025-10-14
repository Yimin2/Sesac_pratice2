import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function ProductDetail(props) {
    const [product, setProduct] = useState({})
    const {productId} = useParams({})
    useEffect(() => {
        async function getProudct() {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`)
            setProduct(response.data)
        }
        getProudct()
    }, [productId]);
    return (<div>{product.description}</div>);
}

export default ProductDetail;