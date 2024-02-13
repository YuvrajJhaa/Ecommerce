import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto my-8">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h1 className="text-lg font-semibold mb-4">Your Cart</h1>
              <div className="flex justify-between mb-2">
                <span>Total Cart Items:</span>
                <span>{cart.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
              </div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Cart Empty</h1>
          <NavLink to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
      
    </div>

    
  );
};

export default Cart;
