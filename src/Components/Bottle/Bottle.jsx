import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAttToCart}) => {
    const {name, img, price} = bottle;
  
    return (
        <div className='bottle'>
            <h4>Name: {name}</h4>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleAttToCart(bottle)}>Purchases</button>
        </div>
    );
};

export default Bottle;