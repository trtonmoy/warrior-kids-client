import React from "react";
import { Link } from "react-router-dom";

const StarWar = ({ item }) => {
  const { id, product_name, product_img, rating, price } = item;
  return (
    <div className="border border-red-400">
      <img className="w-96 h-fit" src={product_img} alt="" />
      <h4> {product_name} </h4>
      <p> {price} </p>
      <p> {rating} </p>
      <Link to={`/products/${id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default StarWar;
