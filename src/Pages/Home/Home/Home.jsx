import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import CategoryTabs from "./CategoryTabs";
import StoreLocation from "./StoreLocation";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="">
      {/* Banner */}
      <Banner></Banner>

      {/* Gallery Section */}
      <Gallery></Gallery>

      <h1 className="text-3xl text-red-600 font-bold text-center">
        Shop By Category
      </h1>
      {/* Category Tabs */}
      <CategoryTabs></CategoryTabs>

      {/* Store Location */}
      <h1 className="text-3xl text-red-600 mb-8 font-bold text-center">
        Store Location
      </h1>
      <StoreLocation></StoreLocation>

      <h1 className="text-3xl text-red-600 my-8 font-bold text-center">
        About US
      </h1>

      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
