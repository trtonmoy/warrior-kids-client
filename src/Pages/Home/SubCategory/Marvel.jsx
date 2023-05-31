import React from "react";
import { Link } from "react-router-dom";

const Marvel = ({ item }) => {
  const { id, product_name, product_img, rating, price } = item;
  return (
    <div className="m-2">
      <div className="border p-12 border-red-400">
        <img
          className="w-96 bg-slate-100 p-4 rounded-lg h-fit"
          src={product_img}
          alt=""
        />
        <h4> {product_name} </h4>
        <p> {price} </p>
        <p> {rating} </p>
        <Link to={`/products/${id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Marvel;
