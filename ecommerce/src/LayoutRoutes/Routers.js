import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Productdetail from '../components/productdetail/Productdetail'
import Home from '../pages/home/Home'
import Categoryproduct from '../components/categoryproduct/Categoryproduct'
import Alluser from '../components/alluser/Alluser'

function Routers() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/prodetails/:id' element={<Productdetail />} />     
                    <Route path='/categories/:id/product' element={<Categoryproduct />} /> 
                    <Route path='/alluser' element={<Alluser />} />     
                </Routes>
            </Router>
        </>
    )
}

export default Routers
