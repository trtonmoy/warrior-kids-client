import React from "react";

const ProductsRow = () => {
  return (
    <section className="mt-8">
      <div className="bg-purple-100 px-2 py-5 flex items-center">
        <p className="text-xl font-bold ml-20 mr-60">Image</p>
        <p className="text-xl font-bold mr-48">Name</p>
        <p className="text-xl font-bold mr-40">Category</p>
        <p className="text-xl font-bold mr-24">Price</p>
        <p className="text-xl font-bold mr-24">Rating</p>
        <p className="text-xl font-bold ">Stock</p>
      </div>
    </section>
  );
};

export default ProductsRow;
