import React, { useEffect, useState } from 'react'
import './categorystyle.css'
import { getAllcategory, getcategorybyproduct } from '../../Apiservices/Api'
import { Link, useParams } from 'react-router-dom'


function Category() {
    const [category, setCategory] = useState([])

    const { id } = useParams()
    useEffect(() => {
        const fechdata = async () => {
            const data = await getAllcategory();
            setCategory(data)
            console.log('allcategory', category);
        }
        fechdata()
    }, [])


    return (
        <>
            <div className="category-display-page">
                {category.map((Category, key) => (
                    <ul className="category-list">
                        <li>
                            <button className='categorybutton'> <Link to={`/categories/${Category.id}/product`}>{Category.name}<img src={Category.image} alt='image' /></Link></button>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default Category
