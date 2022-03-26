import React, { useState, useEffect } from 'react';
import "./Shop.css"
import Product from '../Products/Product';
import CartProduct from '../CartProduct/CartProduct';

const Shop = () => {

    //Fetch data from json file
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () =>{
        fetch("fakeDB.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    //Event lister of Add to cart button
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    //Reset cart
    const [resetCart, setResetCart] = useState(cart)
    const resetCartHandle = () => {
        setResetCart([]);
        setCart(resetCart)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    //loop through all the element 
                    products.map(product => <Product 
                        //creating all the cards
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            {/* cart container */}
            <div className="cart-container">
                <h1 className='cart-heading'>Order Summary</h1>        
               <div>
                   {/* creating cart element */}
                   <CartProduct cartProduct={cart} ></CartProduct>
               </div>

               {/* choose one and reset cart button */}
               <button className='btn'>Choose one for me</button><br/>
               <button className='btn'  onClick={resetCartHandle}>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;