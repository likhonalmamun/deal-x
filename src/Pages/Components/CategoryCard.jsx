import React from "react";

const CategoryCard = ({ info }) => {
  return (
    <div className="p-3 w-full">
      <img
        className="rounded-full mx-auto h-[220px] w-[220px]"
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
