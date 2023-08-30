import React from 'react'
import './App.css';
import Cart from './component/Cart';

import ContactPage from './component/ContactPage';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import CoverUp from './component/CoverUp';
import Accessorie from './component/Accessorie';
import SwimWear from './component/SwimWear';
import NavBar from './component/NavBar';


const App = () => {
  return (
    <div>
      
    
     
      {/* we connect page first we go index.js we wrap everything in broweserRoter */}
      <NavBar/>
      {/* nave bar <NavBar/>component we put only on app.js 
      and it will show all the page-not need to put on all page */}
      <Routes>
        {/* / inside path means homepage */}
       
        <Route path='Contact' element={<ContactPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='CoverUp' element={<CoverUp/>}/>
        <Route path='SwimWear' element={<SwimWear/>}/>
        <Route path='Accessorie' element={<Accessorie/>}/>
       
      </Routes>
      {/* put <footer/> here then it will apply to all page like nav bar */}
    
    </div>
  )
}

export default App