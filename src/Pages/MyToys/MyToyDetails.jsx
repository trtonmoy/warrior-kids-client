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
      <img src={photo} alt="" />
      <p> Name : {name} </p>
    </div>
  );
};

export default MyToyDetails;
