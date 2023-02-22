import React from "react";

function GridCard({ title, images, categories }) {
  return (
    <div className="bg-white py-4 px-4 shadow-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="card-grid grid grid-cols-2 gap-3 my-3">
        <div>
          <div className="w-full h-[151px] bg-gray-300">
            <img
              src={images[0]}
              alt="first-image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2>{categories[0]}</h2>
        </div>
        <div>
          <div className="w-full  h-[151px] bg-gray-300">
            <img
              src={images[1]}
              alt="first-image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2>{categories[1]}</h2>
        </div>
        <div>
          <div className="w-full  h-[151px] bg-gray-300">
            <img
              src={images[2]}
              alt="first-image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2>{categories[2]}</h2>
        </div>
        <div className="relative">
          <div className="w-full  h-[151px] bg-gray-300">
            <img
              src={images[3]}
              alt="first-image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2>{categories[3]}</h2>
        </div>
      </div>
      <div className="card-footer">
        <a href="#">See all offers</a>
      </div>
    </div>
  );
}

export default GridCard;
