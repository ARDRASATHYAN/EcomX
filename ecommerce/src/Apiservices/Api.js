import axios from 'axios'

const BASE_URL='https://api.escuelajs.co/api/v1'

export const getAllproduct=async()=>{
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data;
}


export const getAllcategory=async()=>{
    const response = await axios.get(`${BASE_URL}/categories`)
    return response.data;
}


export const getProductId=async(id)=>{
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data;
}


export const getcategorybyproduct=async(id)=>{
    const response = await axios.get(`${BASE_URL}/categories/${id}/products`)
    return response.data;
}


export const getAlluser=async()=>{
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data;
}