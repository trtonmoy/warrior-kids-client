import React from "react";

const Banner = () => {
  return (
    <section className="relative">
      <div className="max-w-screen ">
        <img
          className="w-full"
          src="https://i5.walmartimages.com/asr/e06d0308-88db-4978-a2ad-45e6b6accf36.031cf0e38aef51dbf3e085ffd84d5e53.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          alt=""
        />
      </div>
      <div className="absolute bottom-8 left-5">
        <h1 className="text-5xl tracking-wider font-extrabold mb-5">
          {" "}
          Warrior Kids: Your One-Stop <br /> Destination for LEGO Adventures"
        </h1>
        <p className="text-2xl tracking-wide font-semibold text-purple-700">
          BlockBlast: Immerse yourself in a world of <br /> endless
          possibilities with our extensive range of LEGO toys. <br /> Let your
          creativity soar as you build, play, and explore with our captivating
          brick-based adventures.
        </p>
      </div>
      <div className="absolute top-32 left-5">
        <h1 className="text-5xl text-purple-800 tracking-wider font-extrabold">
          WARRIOR KIDS
        </h1>
      </div>
    </section>
  );
};

export default Banner;
