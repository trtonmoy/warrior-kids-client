import React from "react";
import { useLoaderData } from "react-router-dom";

const MyToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    sup_name,
    email,
    category,
    price,
    rating,
    stock,
    photo,
    details,
  } = toy;
  console.log(toy);
  return (
    <div>
      <div className="text-center w-full border-red-500 border-2 rounded-lg p-12 m-8">
        <img className="w-96 mx-auto" src={photo} alt="" />
        <h3 className="text-2xl font-bold text-purple-800">
          Toy Name : {name}{" "}
        </h3>
        <p className="text-xl font-medium text-red-400">Price : {price} </p>
        <p className="text-xl font-medium text-red-400">Rating : {rating} </p>
        <p className="text-xl font-medium text-red-400">
          Available Quantity : {stock}{" "}
        </p>
      </div>
    </div>
  );
};

export default MyToyDetails;
