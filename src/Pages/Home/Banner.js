import React from "react";
import "../../App.css";
const Banner = () => {
  return (
    <div className="banner relative ">
      <img
        className="block"
        src={
          "https://image.coolblue.be/1248x535/content/2df973a7080d21e7c9105f881dd98ac2"
        }
        alt=""
      />
      <div className="text-white font-bold z-30 absolute top-1/3 left-10">
        <h1 className="text-4xl">
          <span className="text-[#ef233c]"> Buy or sell old PC Parts on </span>
          <br /> Deal<span className="text-[#ef233c]">X</span> .
        </h1>
        <h1 className="text-2xl mt-5">
          Find your product or customer <br /> Deal
          <span className="text-[#ef233c]">X</span> .
        </h1>
      </div>
    </div>
  );
};

export default Banner;
