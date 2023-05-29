import React from "react";

const Gallery = () => {
  return (
    <div className="my-12">
      <div className="carousel max-w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i5.walmartimages.com/asr/140ddf78-9512-4955-ae89-85c3dc343538.bc197283af6a066ef52b77f5e02a322c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i5.walmartimages.com/asr/9b1b28c4-2972-4144-8c5a-d3ffa57bbf70.d2a20d50d34d38745b80c0f82f306e4d.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i5.walmartimages.com/asr/93c47198-b188-4c35-9f34-71cb708836c0.433a73567b1e2f790c600ff4ae93207f.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i5.walmartimages.com/asr/efea6ce5-9d7f-44e3-800f-6be4f812ae0b.8fff2562135016b92ba0bd101bb145ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
