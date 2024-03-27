import React from 'react'
import Category from '../../components/category/Category'
import Product from '../../components/productpage/Product'

function Home() {
    return (
        <>
            <div className='containar'>
                <Category />
                <Product />
            </div>

        </>
    )
}

export default Home
