import React from 'react'
import { Link } from 'react-router-dom'
import "./productstyle.css"
function Product() {
    return (
        <>
            <div className='product-grid'>
                <div className='product' >
                    <img src="" alt='alternative' />
                    <h2 className='sample'></h2>
                    <p>
                        <span className='price'></span>
                    </p>
                   
                    <Link to="/prodetails">
                        <button className='button1'>product details</button>
                    </Link>
                    <Link to="/category" >
                        <button className='button2'>add cart</button>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default Product
