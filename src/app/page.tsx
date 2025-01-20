import Main from "../Pages/product/[id]/index";
import ProductDetail from "../Pages/product/[id]";

export default function Home() {
  return <>
  <Main />;
<ProductDetail/>
</>
}

// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allProducts } from "@/sanity/lib/queries"

// type Product = {
//   _id: string,
//   name: string,
//   description: string,
//   price: number,
//   image: string
// }

// export default async function Home() {
//   const products: Product[] = await sanityFetch({
//     query: allProducts
//   })

 
// };
