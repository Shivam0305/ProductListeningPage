import React, { useEffect, useState } from 'react'

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
            {products.map((product) => (
                <div key={product.id} className='border p-2 rounded'>
                    <img src={product.image} alt={product.title} className='h-40 object-contain w-full' />
                    <h3 className='text-sm font-semibold mt-2'>{product.title}</h3>
                    <p className='text-gray-700'>${product.price}</p>
                </div>

            ))}
        </div>
    )
}

export default ProductList
