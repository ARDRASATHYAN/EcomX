import React from 'react'
import { Link } from 'react-router-dom'
import "./productdetailstyle.css"

function Productdetail() {
    return (
        <>
            <div className='productdetails-containar'>
                <img src="" alt='image' className='proimage' />
                <div className='product-info'>
                    <h2 className='product-title'></h2>
                    <p className='product-des'></p>
                    <p className='product-price'></p>
                    <button className='buy-btn' >addtocart</button>
                    <Link to='/'>
                        <button className='home-btn'>GoBackHome</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Productdetail
