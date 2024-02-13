import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const {cart} = useSelector((state) => state) 
  return (
    <div >
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to={"/"}>
          <div className='flex gap-4 items-center text-2xl text-white leading-8'>
            <img className="h-16" src={"https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"} alt="" />
            <p>ECOMZY</p>
          </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>

          <NavLink to={"/cart"}>
            <div className='relative'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 &&
                  <span className='absolute -top-1  -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span> 
              }
              
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
