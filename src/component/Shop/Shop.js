import React from 'react';
import './shop.css'
import { useEffect, useState } from 'react';


const Shop = () => {
 
       //fetching data from json
   const [products, setproducts] = useState([]);

   useEffect(()=>{
     fetch('fakeDB.json')
     .then(res=>res.json())
     .then(products=> setproducts(products))
 
   },[])



    return (
        <div className='shop-container'>
            <div className='card-container'>
                
                
            </div>

            <div className='cart-container'>
                <h1>This is cart part</h1>
            </div>

        </div>

    );
};

export default Shop;