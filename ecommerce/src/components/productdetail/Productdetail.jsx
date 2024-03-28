import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./productdetailstyle.css"
import { getProductId } from '../../Apiservices/Api'
import { CartContext } from '../../contextapi/CartContext'


function Productdetail() {
    const [first, setfirst] = useState({})
    const { addToCart } = useContext(CartContext);
    const { id } = useParams()
   
    useEffect(() => {
        const fetchproductid = async () => {
            const data = await getProductId(id);
            setfirst(data)
            console.log('jjj', first);
        }

        fetchproductid()

    }, [id])

    const handleAddToCart = (id) => {
        console.log('cartadded');
        addToCart(first); 
        console.log('id',first.id);
        // navigate(`/cart/${id}`);
    };
    return (
        <>
            <div className='productdetails-containar'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={first?.images} alt='noimage' className='proimage' />
                    </div>
                    <div className='product-info  col-md-8'>
                        <h2 className='product-title'>{first?.title}</h2>
                        <p className='product-des'>{first?.description}</p>
                        <p className='product-price'>${first?.price}</p>
                        <Link >
                            <button className='buy-btn'onClick={handleAddToCart} >addtocart</button>
                        </Link>
                        <Link to='/'>
                            <button className='home-btn'>GoBackHome</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdetail
