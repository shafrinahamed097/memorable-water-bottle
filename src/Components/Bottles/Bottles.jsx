import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

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
                
    
    if(bottles.length > 0){
          const storedCart =   getStoredCart();

          const saveCart = [];
      
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id ===id);
        if(bottle){
            saveCart.push(bottle)

        }
        console.log(saveCart);
        setCart(saveCart);
      }



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
            <Cart cart={cart} />
            <div className='bottleContainer'>
                {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} handleAttToCart={handleAttToCart} />)
            }
            </div>
        </div>
    );
};

export default Bottles;