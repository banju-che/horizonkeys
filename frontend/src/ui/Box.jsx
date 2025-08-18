// Box.jsx
import React from "react";

const Box = ({ title, bathroom, bedrooms, square_feet, image, price, width = "300px", height = "200px" }) => {
  return (
    <div
      className="rounded-2xl shadow-md overflow-hidden flex flex-col items-center justify-center text-center bg-white"
      style={{ width, height }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-2/3 object-cover"
        />
      )}
      <div className="p-3">
        <div>
            <h2 className="text-lg font-bold">{title}</h2>
        </div>

        <div className="flex ">
            <h4>Ksh {price}</h4>
            <p>bathroom {bathroom}</p>
            <p>bedrooms {bedrooms}</p>
            <p>{square_feet} sqr</p>
        </div>
        
      </div>
    </div>
  );
};

export default Box;
