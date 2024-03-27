import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./productdetailstyle.css"
import { getProductId } from '../../Apiservices/Api'


function Productdetail() {
    const [first, setfirst] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const fetchproductid = async () => {
            const data = await getProductId(id);
            setfirst(data)
            console.log('jjj', first);
        }

        fetchproductid()

    }, [id])

   
    return (
        <>
            <div className='productdetails-containar'>
                <img src={first?.images} alt='image' className='proimage' />
                <div className='product-info'>
                    <h2 className='product-title'>{first?.title}</h2>
                    <p className='product-des'>{first?.description}</p>
                    <p className='product-price'>{first?.price}</p>
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
