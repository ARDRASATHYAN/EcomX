import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Product from '../components/productpage/Product'
import Productdetail from '../components/productdetail/Productdetail'
import Category from '../components/category/Category'

function Routers() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Product />} />
                    <Route path='/prodetails' element={<Productdetail />} />
                    <Route path='/category' element={<Category />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routers
