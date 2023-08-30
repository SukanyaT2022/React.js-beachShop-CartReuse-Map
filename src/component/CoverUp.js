import React from 'react'
import './CoverUp.css';
import Cart from './Cart';
import {CoverUpData} from '../Data';
// {CoverUpData} comeform data.js section-export const CoverUpData = [

const CoverUp = () => {
  return (
    <>

    <h2>Cover Up</h2>
    <div className='parentBox'>
{
  CoverUpData.map((valData)=>{
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

export default CoverUp