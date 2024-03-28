import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./productstyle.css"
import { getAllproduct } from '../../Apiservices/Api'
import { CartContext } from '../../contextapi/CartContext'


function Product() {
    const [product, setProduct] = useState([])
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        const fechdata = async () => {
            const data = await getAllproduct();
            setProduct(data)
            console.log('allproducts', product);
        }
        fechdata()
    }, [])
    const handleAddToCart = (product) => {
        console.log('Adding to cart:', product);
        addToCart(product); 
    };
    return (
        <>
            <div className='product-grid'>
                {product.map((product, key) => (
                    <div className='product' key={product.id} >
                        <Link to={`/prodetails/${product.id}`}><img src={product.images} alt='alternative' />
                        </Link>
                        <h2 className='sample'>{product.title}</h2>
                        <p>
                            <h3 className='price'>price:${product.price}</h3>
                        </p>
                        <button className='button1' onClick={() => handleAddToCart(product)}>AddToCart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product
