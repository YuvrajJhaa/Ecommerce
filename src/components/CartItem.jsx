import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };

  return (
    <div className="bg-white max-h-[440px] rounded-lg shadow-md p-4 flex items-center justify-between mb-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
      <div className="ml-4 flex-grow">
        <h1 className="text-lg font-bold ">{item.title}</h1>
        <p className="text-gray-600">{item.description.split(" ").slice(0,10) + "..."}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800 font-semibold">${item.price}</p>
          <div
            className="text-4xl bg-red-200 rounded-full ml-2 p-2 cursor-pointer hover:text-red-600"
            onClick={removeFromCart}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartItem;
