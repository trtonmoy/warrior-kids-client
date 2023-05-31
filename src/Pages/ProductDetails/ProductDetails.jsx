import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  const {
    product_name,
    product_img,
    sup_name,
    email,
    category,
    price,
    rating,
    stock,
    photo,
    details,
  } = product;

  return (
    <div>
      <div>
        <img src={product_img} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
