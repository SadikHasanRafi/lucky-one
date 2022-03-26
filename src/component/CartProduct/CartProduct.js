import React from 'react';
import './CartProduct.css'

const CartProduct = (props) => {

   
    const { cartProduct} = props;
    return (
            <div>
                
                {
                    cartProduct.map(addedProduct => 
                        
                       //loop through all the array element 
                        <div className='cart-ProductStyle'>
                            <p  style={{ Display: "inline"}}>
                            {
                                (addedProduct.name)
                                
                            }
                            </p>
                            <p style={{textAlign: 'right'}}>
                                BDT. {addedProduct.price}
                            </p>
                        </div>
                    )
                }
            </div>
    );
};

export default CartProduct;