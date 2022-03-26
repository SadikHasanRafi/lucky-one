import React from 'react';
import "./Product.css"

const product = (props) => {
    const {img, name, price, brand} = props.product;
    return (
        <div>
            <img className='card-img' src={img} alt={name}/>
            <h1>{name}</h1>
            <h2>{brand}</h2>
            <p>BDT.{price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default product;