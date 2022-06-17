import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'

const Pages = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cuisine/:type' element={<Cuisine />}></Route>
      </Routes>
   
  )
}

export default Pages