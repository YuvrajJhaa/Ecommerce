import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import { add } from "../redux/slices/CartSlice"
import toast from 'react-hot-toast';

const Product = ({post}) => {
  
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(add(post));
    toast.success("Item added successfully")
  }

  const removefromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed")
  }

  return (
    <div className='border flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  gap-3 p-4 mt-10 ml-5 rounded-sm'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='h-[160px]'>
        <img className='h-full w-full' src={post.image} alt="" />
      </div>
      <div className='flex justify-between gap-12  items-center w-full mt-5'> 
        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>

        {
          cart.some((p) => p.id === post.id) ? 
            (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removefromCart}>
              Remove Item
            </button >) :
            (
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addtoCart}>Add to Cart</button>
            )
            
        
        }

        </div>
      
    </div>
  )
}

export default Product
