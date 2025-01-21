
import { defineQuery } from 'next-sanity';

export const allProducts = defineQuery(
  `*[_type == "product"]{
  _id,
  productName,
  description,
  price,
  category,
  inventory,
  status,
  colors,
  image {
    asset->{
      _id,
      url
    }
  }
}`
);

// export const fourPro = defineQuery(
//   `*[_type == "product"][0..3]{
//     _id,
//     productName,
//     category,
//     price,
//     inventory,
//     colors,
//     status,
//     description,
//     "imageUrl": image-asset->url
//       }`
// )