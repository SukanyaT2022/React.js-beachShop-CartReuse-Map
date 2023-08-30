import React from 'react'
import './Accessorie.css';
import {AccesorieData} from '../Data'
import Cart from './Cart';

//{AccesorieData} come from Data,js in   --  export const AccesorieData = [

const Accessorie = () => {
  return (
    <>
  
    <h2>Accessories</h2>
    <div className='parentBox'>
  {
    //now we use accessorie.ja is parent and put cart.js which is child to pass data-parent to child
    AccesorieData.map((valData)=>{
      return(
<Cart 
keyID={valData.id} 
keyName={valData.Name}          
keyPrice={valData.price} 
keyColor={valData.color}     
keyImage={valData.image}             
/>
      )
    })
  }
  </div>
    </>
  )
}

export default Accessorie