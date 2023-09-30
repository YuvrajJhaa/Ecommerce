import React from 'react'

const Product = ({title, description ,price , image}) => {
  return (
    <div className='shadow-lg '>
      <p className='font-bold'>{title}</p>
      <p>{description}</p>
      <img src={image} className='h-24  ' alt="" />
      <p>{price}$</p>
    </div>
  )
}

export default Product
