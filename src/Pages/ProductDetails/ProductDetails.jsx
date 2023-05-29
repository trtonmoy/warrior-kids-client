import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div>
      <div>{product?.price}</div>
    </div>
  );
};

export default ProductDetails;
