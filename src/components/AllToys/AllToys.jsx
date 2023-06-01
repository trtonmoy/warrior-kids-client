import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import ProductsRow from "../Products/ProductsRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const products = useLoaderData();
  useTitle('All Toy');
  return (
    <div>
      {/* Products Section */}
      <section>
        <div className="hidden lg:block">
          <ProductsRow></ProductsRow>
        </div>
        {products.slice(0, 20).map((product) => (
          <Products key={product.id} products={product}></Products>
        ))}
      </section>
    </div>
  );
};

export default AllToys;
