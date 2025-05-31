import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCart } from '../../utilities/localstorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=>setBottles(data));

    },[]);

    // load cart from local storage
    useEffect(()=>{
                
      console.log("Called the useEffect", bottles.length);
    if(bottles.length > 0){
          const storedCart =   getStoredCart();
      console.log(storedCart);
    }
    },[bottles]);

    const handleAttToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }


    return (
        <div>
            <h2>Bottle Available{bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <div className='bottleContainer'>
                {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} handleAttToCart={handleAttToCart} />)
            }
            </div>
        </div>
    );
};

export default Bottles;