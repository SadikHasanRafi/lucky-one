import React, { useState, useEffect } from 'react';
import "./Shop.css"
import Product from '../Products/Product';
import CartProduct from '../CartProduct/CartProduct';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () =>{
        fetch("fakeDB.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        // let counter = 0;
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                
               <div>
                   {/* {console.log(typeof(cart.cartProduct))} */}
                   <CartProduct cartProduct={cart}></CartProduct>
               </div>
            </div>
        </div>
    );
};

export default Shop;