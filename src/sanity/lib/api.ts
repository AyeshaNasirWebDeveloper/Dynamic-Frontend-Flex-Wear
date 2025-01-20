import axios from 'axios';

export interface Product {
  id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: string;
  description: string;
}

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get('https://template-03-api.vercel.app/api/products');
  return res.data.data;
}

export async function getProductById(id: string): Promise<Product> {
  const res = await axios.get(`https://template-03-api.vercel.app/api/products/${id}`);
  return res.data.data;
}
