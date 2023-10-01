import React from 'react'
import {useSelector} from 'react-redux'
import CartItem from '../components/CartItem';

const Cart = () => {
  
  const {cart} = useSelector((store)=> store);


  return (
    <div>
      {
        cart.map(item=>{
          <CartItem />
        })
      }
    </div>
  );
}

export default Cart
