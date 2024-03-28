import React, { useContext, useEffect, useState } from 'react'
import '../productpage/productstyle.css'
import { getcategorybyproduct } from '../../Apiservices/Api'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../../contextapi/CartContext'


function Categoryproduct() {
  const [catproduct, setCatproduct] = useState([])
  const { addToCart } = useContext(CartContext);
  const { id } = useParams()
  useEffect(() => {
    const fechdatas = async () => {
      const data = await getcategorybyproduct(id);
      setCatproduct(data)
      console.log('allcategory', catproduct);
    }
    fechdatas()
  }, [id])
  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    addToCart(product);
  };
  return (
    <>
      <div className='product-grid'>
        {catproduct.map((product, key) => (
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

export default Categoryproduct
