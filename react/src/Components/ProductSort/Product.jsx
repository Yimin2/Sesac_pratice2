import React from 'react';

function Product({product}) {
    return (<div>
        <div className="border border-gray-300 rounded-lg p-5 m-2.5 shadow-md bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="m-0 mb-2.5 text-gray-800 text-xl font-semibold">
                {product.title}
            </h3>
            <div className="grid grid-flow-row grid-cols-2 justify-between">
                <p className="m-0 text-gray-600 leading-relaxed">
                    ID : {product.id}
                </p>
                <p className="m-0 text-gray-600 leading-relaxed">
                    가격 : {product.price}
                </p>
                <p className="m-0 text-gray-600 leading-relaxed">
                    평점 : {product.rating}
                </p>
                <p className="m-0 text-gray-600 leading-relaxed">
                    재고 : {product.stock}
                </p>
                <p className="m-0 text-gray-600 leading-relaxed">
                    카테고리 : {product.category}
                </p>
                <p className="m-0 text-gray-600 leading-relaxed">
                    브랜드 : {product.brand}
                </p>
                <p className="m-0 text-gray-600 leading-relaxed">
                    {product.description}
                </p>
            </div>
        </div>
    </div>);
}

export default Product;