import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StarWar from "../SubCategory/StarWar";
import Marvel from "../SubCategory/Marvel";
import Technic from "../SubCategory/Technic";

const CategoryTabs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://warrior-kids-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const starWar = products.filter(
    (product) => product.sub_category === "star war LEGO"
  );

  const marvel = products.filter(
    (product) => product.sub_category === "LEGO Marvel"
  );

  const technic = products.filter(
    (product) => product.sub_category === "Technic"
  );

  return (
    <div className="text-center my-20">
      <Tabs>
        <TabList>
          <Tab>Star Wars</Tab>
          <span className="font-bold border text-3xl"></span>
          <Tab>Marvel</Tab>
          <span className="font-bold border text-3xl"></span>
          <Tab>Technic</Tab>
          <span className="font-bold border text-3xl"></span>
        </TabList>

        <TabPanel>
          <div className="lg:flex lg:justify-around">
            {starWar.slice(0, 3).map((item) => (
              <StarWar key={item.id} item={item}></StarWar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:flex lg:justify-around">
            {marvel.slice(0, 3).map((item) => (
              <Marvel key={item.id} item={item}></Marvel>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:flex lg:justify-around">
            {technic.slice(0, 3).map((item) => (
              <Technic key={item.id} item={item}></Technic>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
