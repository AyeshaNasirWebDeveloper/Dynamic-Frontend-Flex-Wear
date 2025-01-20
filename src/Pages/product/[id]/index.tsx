"use client"
import { useEffect, useState } from 'react';
import { getProducts, Product } from '../../../sanity/lib/api'
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-6 text-center'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <div key={product.id} className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition'>
            <img src={product.image} alt={product.productName} className='w-full h-48 object-cover rounded-md' />
            <h2 className='text-xl font-semibold mt-3 text-gray-900'>{product.productName}</h2>
            <p className='text-gray-600'>{product.category}</p>
            <p className='text-gray-800 font-bold mt-2'>${product.price}</p>
            <Link href={`/product/${product.id}`}>
              <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full'>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}