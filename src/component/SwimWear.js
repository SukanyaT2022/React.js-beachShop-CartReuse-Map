import React from 'react'
import './SwimWear.css';
import {SwimWearData} from '../Data';
import Cart from './Cart';
const SwimWear = () => {
  return (
    <>
      <h2>Swim Wear</h2>
    <div className='parentBox'>
      {
SwimWearData.map((valData)=>{
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

export default SwimWear