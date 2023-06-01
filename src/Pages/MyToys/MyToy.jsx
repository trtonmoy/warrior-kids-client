import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "../../components/MyToyCard/MyToyCard";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
  const loadedToys = useLoaderData();
  const [myToys, setMyToys] = useState(loadedToys);
  useTitle('My Toy');
  return (
    <div>
      <div className="">
        {myToys.map((toy) => (
          <MyToyCard
            key={toy._id}
            toy={toy}
            myToys={myToys}
            setMyToys={setMyToys}
          ></MyToyCard>
        ))}
      </div>
    </div>
  );
};

export default MyToy;
