import React from 'react'
 import {dataName} from '../Data'
 import './Cart.css'
const Cart = () => {
  return (
    <div className='parentBox'>
       
  {
    dataName.map((val)=>{
      return(
        <div className='wrapper' key={val.id}>  
    
          <div className='cartBox'>
  
            <div className='imageBox'>
      <img src={val.image} height={300}/>
      
            </div>
      
            <div className='contentBox'>
            <h2>{val.Name}</h2>
            <p>{val.price}</p>
            <p>{val.color}</p>

            </div>
            
          </div>
       
          </div>
      )
    })
  }
    </div>
  )
}

export default Cart