import React from "react";

const CategoryCard = ({ info }) => {
  return (
    <div className="p-3 w-full">
      <img
        className="rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-red-400 duration-200  shadow-red-400 mx-auto h-[220px] w-[220px]"
        src={info.img}
        alt=""
      />
      <h1 className="text-center mt-3 font-bold text-lg text-[#d90429]">
        {info.name}
      </h1>
    </div>
  );
};

export default CategoryCard;
