import React from 'react';

const CartProduct = (props) => {
    
    const { cartProduct } = props;

    return (
            <div>
                {
                    cartProduct.map(addedProduct => 
                        <p style={{background: "white"}}>
                            {
                                (addedProduct.name)
                            }
                        </p>
                    )
                }
            </div>
    );
};

export default CartProduct;