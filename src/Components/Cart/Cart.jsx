import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className='cartContainer'>
                {
                    cart.map(bottle=> <img src={bottle.img} />)
                }
            </div>
        </div>
    );
};

export default Cart;