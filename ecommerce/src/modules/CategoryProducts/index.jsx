import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const CategoryProducts = () => {
    const {name} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, [])
    if (products.length === 0) return <div className='text-center mt-[300px]'>Loading...</div> 
    return (
        <div className='mt-40'>
            <h2 className="text-center sm:text-2xl text-2xl font-medium title-font text-gray-600">Search results for: <span className="text-gray-900 uppercase">"{name}"</span></h2>
            <ProductCard products={products}/>
        </div>
    );
}

export default CategoryProducts;
