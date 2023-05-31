import React from "react";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "../../components/MyToyCard/MyToyCard";

const MyToy = () => {
  const myToys = useLoaderData();
  return (
    <div>
      <div className="">
        {myToys.map((toy) => (
          <MyToyCard key={toy._id} toy={toy}></MyToyCard>
        ))}
      </div>
    </div>
  );
};

export default MyToy;
