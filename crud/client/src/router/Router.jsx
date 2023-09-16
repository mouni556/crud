import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../components/Home'
import Create from '../components/Create'
import Update from '../components/Update'

const Router = () => {
  return (
    <>
    <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
    </Routes>
    
    
    </>
  )
}

export default Router