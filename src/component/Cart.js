import React from 'react';

import './Cart.css';

const Cart = ({keyID,keyName, keyPrice, keyColor, keyImage}) => {
  return (
    <>
 
       
        <div className="wrapper" key={keyID}>
          <div className="cartBox">
            <div className="imageBox">
              <img src={keyImage} height={300} />
            </div>

            <div className="contentBox">
              <h2>{keyName}</h2>
              <p>{keyPrice}</p>
              <p>{keyColor}</p>
            </div>
          </div>
        </div>
        
    
    </>
  );
};

export default Cart;
