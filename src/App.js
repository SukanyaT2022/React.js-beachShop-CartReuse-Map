import React from 'react'
import './App.css';
import Cart from './component/Cart';
import NavBar from './component/NavBar';
import ContactPage from './component/ContactPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <NavBar/>
      <Cart/>
      <ContactPage/> */}
      {/* we connect page first we go index.js we wrap everything in broweserRoter */}
      <Routes>
        {/* / inside path means homepage */}
        <Route path='/' element={<Cart/>}/>
        <Route path='contact' element={<ContactPage/>}/>
      
       
      </Routes>
    </div>
  )
}

export default App