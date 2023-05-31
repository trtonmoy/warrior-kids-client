import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const { id, product_img, product_name, price, rating, stock, sub_category } =
    products;

  return (
    <section className="lg:flex items-center mb-2 border-purple-300 border-4 border-r-purple-500 border-l-purple-500 bg-slate-50 p-3 rounded ">
      <img
        className="w-52 h-52 p-4 ml-4 bg-slate-100 rounded"
        src={product_img}
        alt="Product image"
      />
      <h3 className="text-xl font-bold mx-auto">{product_name} </h3>
      <h5 className="text-xl font-bold mx-auto"> {sub_category} </h5>
      <h6 className="text-xl font-bold mx-auto"> {price} </h6>
      <h6 className="text-xl font-bold mx-auto"> {rating} </h6>

      <div className="mx-auto mt-16">
        <h6 className="text-xl font-bold mb-5 "> {stock} </h6>
        <Link to={`/products/${id}`}>
          <button className="btn">details</button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
