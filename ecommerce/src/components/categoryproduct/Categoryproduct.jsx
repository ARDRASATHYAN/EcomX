import React, { useEffect, useState } from 'react'
import '../productpage/productstyle.css'
import { getcategorybyproduct } from '../../Apiservices/Api'
import { Link, useParams } from 'react-router-dom'


function Categoryproduct() {
    const [catproduct,setCatproduct]=useState([])
    const{id}=useParams()
    useEffect(() => {
        const fechdatas = async () => {
          const data = await getcategorybyproduct(id);
          setCatproduct(data)
          console.log('allcategory',catproduct );
        }
        fechdatas()
      }, [])
  return (
    <>
       <div className='product-grid'>
            {catproduct.map((product, key) => (
                <div className='product'key={product.id} >
                    <img src={product.images} alt='alternative' />
                    <h2 className='sample'>{product.title}</h2>
                    <p>
                        <span className='price'>{product.price}</span>
                    </p>
                   
                    <Link to={`/prodetails/${product.id}`}>
                        <button className='button1'>productdetails</button>
                    </Link>
                    <Link to="" >
                        <button className='button2'>add cart</button>
                    </Link>
                    
                </div>
                ))}
            </div>
    </>
  )
}

export default Categoryproduct
