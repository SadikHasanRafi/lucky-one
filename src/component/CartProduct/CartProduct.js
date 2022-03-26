import React from 'react';

const CartProduct = (props) => {
    //let {cartProduct}=props
    console.log(props.cartProduct)

    return (
        <div>
            <p>this is from cart products {props.name}</p>
            
        </div>
    );
};

export default CartProduct;