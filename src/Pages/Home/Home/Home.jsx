import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import CategoryTabs from "./CategoryTabs";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* Gallery Section */}
      <Gallery></Gallery>

      <h1 className="text-3xl text-red-600 font-bold text-center">
        Shop By Category
      </h1>
      {/* Category Tabs */}
      <CategoryTabs></CategoryTabs>
    </div>
  );
};

export default Home;
