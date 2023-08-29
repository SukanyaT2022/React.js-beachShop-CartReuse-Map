import React from 'react'
import './App.css';
import Cart from './component/Cart';

import ContactPage from './component/ContactPage';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import CoverUp from './component/CoverUp';
import Accessorie from './component/Accessorie';
import SwimWear from './component/SwimWear';


const App = () => {
  return (
    <div>
      
    
      {/* <NavBar/>
      <Cart/>
      <ContactPage/> */}
      {/* we connect page first we go index.js we wrap everything in broweserRoter */}
      {/* <NavBar/> */}
      <Routes>
        {/* / inside path means homepage */}
       
        <Route path='Contact' element={<ContactPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='CoverUp' element={<CoverUp/>}/>
        <Route path='SwimWear' element={<SwimWear/>}/>
        <Route path='Accessories' element={<Accessorie/>}/>
       
      </Routes>
    </div>
  )
}

export default App