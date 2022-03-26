import React from 'react';
import "./Product.css"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const product = (props) => {
    const {handleAddToCart, product} = props;
    const {img, name, price, brand} = product;
    return (
        <div className='card'>
            <img className='card-img' src={img} alt={name}/>
            <div className="info">
                <h1>{name}</h1>
                <h2>{brand}</h2>
                <p>BDT. {price}</p>
            </div>
            <button className='cartBtn' onClick={() => handleAddToCart(product)}>Add to cart <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>
    );
};

export default product;