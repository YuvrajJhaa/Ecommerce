import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiSolidCartAlt} from 'react-icons/bi'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 flex flex-row justify-evenly items-center max-h-16 shadow-lg'>
      <NavLink to={"/"} >
        <img src={logo} className='h-16' alt="" />
        
      </NavLink>

      <div className='flex items-center'>
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/cart"}>
          <div > 
            <BiSolidCartAlt className='text-2xl'/>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
