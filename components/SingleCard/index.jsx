import React from "react";

function SingleCard({ title, image }) {
  return (
    <div className="bg-white py-4 px-4 shadow-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="card-thumb w-full h-[303px] bg-gray-300 my-3">
        <img
          src={image}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card-footer">
        <a href="#">See all offers</a>
      </div>
    </div>
  );
}

export default SingleCard;
